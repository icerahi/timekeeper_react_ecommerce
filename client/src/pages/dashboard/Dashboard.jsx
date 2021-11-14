import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import AdminRoute from "../../routes/adminRoute/AdminRoute";
import AddProduct from "./addProduct/AddProduct";
import "./Dashboard.css";
import DashboardHome from "./dashboardHome/DashboardHome";
import MakeAdmin from "./makeAdmin/MakeAdmin";
import ManageOrders from "./manageOrders/ManageOrders";
import ManageProducts from "./manageProducts/ManageProducts";
import MyOrders from "./myOrders/MyOrders";
import Pay from "./pay/Pay";
import Review from "./review/Review";
import SideBar from "./sidebar/SideBar";
const Dashboard = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="container-fluid">
      <div className="row w-100 flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2  px-0 bg-dark">
          <SideBar url={url} />
        </div>
        <div className="col py-3">
          <Switch>
            <Route exact path={`${path}`} component={DashboardHome} />
            <Route exact path={`${path}/myorders`} component={MyOrders} />
            <Route exact path={`${path}/review`} component={Review} />
            <AdminRoute
              exact
              path={`${path}/addproduct`}
              component={AddProduct}
            />
            <AdminRoute
              exact
              path={`${path}/manage-products`}
              component={ManageProducts}
            />
            <AdminRoute
              exact
              path={`${path}/manage-orders`}
              component={ManageOrders}
            />
            <AdminRoute
              exact
              path={`${path}/make-admin`}
              component={MakeAdmin}
            />
            <Route path={`${path}/pay`} component={Pay} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
