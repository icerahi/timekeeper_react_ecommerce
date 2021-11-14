import { Route, Redirect } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, isLoading,setError} = useAuth();
  if(isLoading){
      return <Loader/>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <Component />
        ) : ((setError('Please Login to go forward !!!')),
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
