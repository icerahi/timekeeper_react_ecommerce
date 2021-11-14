import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Purchase from "./pages/purchase/Purchase";
import NotFound from "./pages/notFound/NotFound";
import Products from "./pages/products/Products";
import Login from "./pages/auth/login/Login";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./routes/privateRoute/PrivateRoute";
import Register from "./pages/auth/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <PrivateRoute exact path="/purchase/:id" component={Purchase} />
          <Route exact path="/products" component={Products} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
