const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qcwm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const run = async () => {
  try {
    await client.connect();
    const database = client.db("timekeeper");
    const productCollection = database.collection("products");
    const orderCollection = database.collection("orders");
    const reviewCollection = database.collection("reviews");
    const userCollection = database.collection("users");
    // GET ALL PRODUCTS API
    app.get("/products", async (req, res) => {
      const size = parseInt(req.query?.size);
      console.log(size);
      if (size) {
        const cursor = productCollection.find({}).limit(size);
        const result = await cursor.toArray();
        res.send(result);
      } else {
        const cursor = productCollection.find({});
        const result = await cursor.toArray();
        res.send(result);
      }
    });
    // GET SINGLE PRODUCT API
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });

    //POST ORDER API
    app.post("/orders", async (req, res) => {
      const order = req.body;
      const result = await orderCollection.insertOne(order);
      res.json(result);
    });

    //GET : ORDERS API
    app.get("/orders", async (req, res) => {
      const cursor = orderCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    //GET SPECIFIC USER ORDERS
    app.get("/myorders", async (req, res) => {
      const email = req?.query?.email;
      const filter = { email: email };
      const cursor = orderCollection.find(filter);
      const result = await cursor.toArray();
      console.log(result);
      res.send(result);
    });

    // Cancel order API
    app.delete("/order/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await orderCollection.deleteOne(query);
      res.json(result);
    });

    // POST REVIEW API
    app.post("/review", async (req, res) => {
      const review = req.body;
      const result = await reviewCollection.insertOne(review);
      res.send(result);
    });
    //GET REVIEW API
    app.get("/reviews", async (req, res) => {
      const cursor = reviewCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    //POST: Create User
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.json(result);
    });

    //GET: check Is user Admin or Not using email
    app.get("/users/:email", async (req, res) => {
      const email = req.params?.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      res.json({ admin: isAdmin });
    });

    //POST : Add new product
    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.json(result);
    });

    //DELETE : product
    app.delete("/product/:id", async (req, res) => {
      const id = req.params?.id;
      const filter = { _id: ObjectId(id) };
      const result = await productCollection.deleteOne(filter);
      res.json(result);
    });

    //DELETE: order
    app.delete("/order/:id", async (req, res) => {
      const id = req.params?.id;
      const filter = { _id: ObjectId(id) };
      const result = await orderCollection.deleteOne(filter);
      res.json(result);
    });

    //UPDATE: order shipped
    app.put("/order/:id", async (req, res) => {
      const id = req.params?.id;
      const filter = { _id: ObjectId(id) };
      const updateOrder = {
        $set: {
          status: "shipped",
        },
      };
      const result = await orderCollection.updateOne(filter, updateOrder);
      res.json(result);
    });

    //Update: Make Admin
    app.put("/users/make-admin", async (req, res) => {
      const user = req.body;
      //get requester email as query parameter
      const requester = req.query?.email;

      if (requester) {
        const requesterAccount = await userCollection.findOne({
          email: requester,
        });

        if (requesterAccount.role === "admin") {
          const filter = { email: user.email };
          const requestedAccount = await userCollection.findOne(filter);
          if (requestedAccount?.role !== "admin") {
            const updateUser = {
              $set: {
                role: "admin",
              },
            };
            const result = await userCollection.updateOne(filter, updateUser);
            res.json(result);
          } else {
            res.status(304).json({
              message:
                "Can't modify,because requested account is already in admin role",
            });
          }
        } else {
          res.status(403).json({ message: "You don't have authorization!!" });
        }
      }
    });

    //GET: Normal User and admin dashboard
    app.get("/dashboard", async (req, res) => {
      const email = req.query?.email;
      const user = await userCollection.findOne({ email: email });
      if (user?.role === "admin") {
        const totalOrder = await orderCollection.countDocuments();
        const pendingOrder = await orderCollection.countDocuments({
          status: "pending",
        });
        const shippedOrder = await orderCollection.countDocuments({
          status: "shipped",
        });
        const totalProduct = await productCollection.countDocuments();
        const totalReview = await reviewCollection.countDocuments();
        const totalUser = await userCollection.countDocuments();
        const totalAdmin = await userCollection.countDocuments({
          role: "admin",
        });
        const data = {
          totalOrder,
          pendingOrder,
          shippedOrder,
          totalProduct,
          totalReview,
          totalUser,
          totalAdmin,
          role:'admin',
        };
        res.send(data);
      } else {
        const totalOrder = await orderCollection.countDocuments({
          email: email,
        });
        const pendingOrder = await orderCollection.countDocuments({
          email: email,
          status: "pending",
        });
        const shippedOrder = await orderCollection.countDocuments({
          email: email,
          status: "shipped",
        });
        const data = {
          totalOrder,
          pendingOrder,
          shippedOrder,
          role:'user',
        };
        res.send(data);
      }
    });
  } catch {
    // await client.close()
  }
};

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to timekeeper backend api");
});

app.listen(port, () => {
  console.log("TimeKeeper server running at port:", port);
});
