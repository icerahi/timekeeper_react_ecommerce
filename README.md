# TimeKeeper (frontend)

**Time Keeper** is a full feature Online niche Product Application,That's contains lot's of feature like product ordering,customer reviewing,product ordering and also including admin and user dashboard with orders and product management. **Time Keeper.**

## Live
**Frontend** [Click](https://timekeeper-785db.web.app) or visit here: https://timekeeper-785db.web.app

**Backend**: https://boiling-anchorage-40626.herokuapp.com

## Tech Stack
**Frontend:** Reactjs,React-Router-DOM,Firebase, ContextAPI, Bootstrap,React-Hook-Form,Axios,sweetalert
**Backend:** Nodejs,Expressjs,Mongodb,Cors,Dotenv,

## Features

- Unique Design and Interactive UI
- Featured Home page
  - Banner,Best Products, Customer Reviews,About Section,Footer Section
- Firebase EmailPassword Authentication with additional Username Registration
- Exploring all products Page
- Protected route for unauthenticate users.
- Dynamic Routing
- Parchase Product with automatic fill user data from login system
- Admin Dashboard and User Dashboard
- User Dashboard
  - User can see his/her all orders information and status
  - User can cancel his/her order
  - User can write a review and rating.
- Admin Dashboard
  - Admin can see all other,products informations
  - Admin can add a new product.
  - Admin can delete or update status of a order from `Manage Orders`
  - Admin can delete Product
  - Admin can give a role `admin` to a normal user.
- Confirmation message before canceling/deleting any order/products.
- Data preload spinner
- Realistic Header,Footer

## Run Locally

Clone the project

```bash
  git clone https://github.com/programming-hero-web-course-4/niche-website-client-side-icerahi
```

Go to the project directory

```bash
  cd niche-website-client-side-icerahi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


# TimeKeeper (Backend)

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

  
