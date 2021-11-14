
# TimeKeeper (Backend)

**Time Keeper** is a full feature Online niche Product Application,That's contains lot's of feature like product ordering,customer reviewing,product ordering and also including admin and user dashboard with orders and product management. **Time Keeper.**


## Tech Stack

**server:** Nodejs,Expressjs,Mongodb,Cors,Dotenv,


  
## Live

**Frontend**: [Click](https://timekeeper-785db.web.app) or visit here: https://timekeeper-785db.web.app

**Backend**: https://boiling-anchorage-40626.herokuapp.com
## Backend API Endpoints

- `/products` [GET] - Get all products data
- `/products/:id` [GET] - Get single product data
- `/orders` [POST] - Create a new order
- `/orders` [GET] - get all orders
- `/myorders?email=example@mail.com` [get] - get specific user orders
- `/order/:id` [Delete] - Delete a order
- `/reviews` [GET] - to get all customer reviews
- `/users` [POST] - Add a new user to database
- `/users/:email` [GET] - Check user admin or not
- `/products/` [POST] - Create a new product
- `/product/:id` [DELETE] - DELETE a product
- `/order/:id` [DELETE] - delete a order
- `/order/:id` [PUT] - update order status `pending` to `shipped`
- `/users/make-admin` [PUT] - make a user as admin
- `/dashboard` [GET] - GET user and admin data

 
## Run Locally

Clone the project

```bash
  git clone https://github.com/programming-hero-web-course-4/niche-website-server-side-icerahi
```

Go to the project directory

```bash
  cd niche-website-server-side-icerahi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
Or (if Nodemon Globally installed in System)
```bash
  npm run start-dev
```

  
## Authors

- [Imran Hasan Rahi](https://fb.com/icerahi)

  