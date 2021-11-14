import { Route, Redirect } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { user, admin, isLoading, setError } = useAuth();
  if (!admin) {
    return <Loader />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
       user && admin ? (
          <Component />
        ) : (
          (<Redirect to={{ pathname: "/", state: { from: location } }} />)
        )
      }
    />
  );
};

export default AdminRoute;
