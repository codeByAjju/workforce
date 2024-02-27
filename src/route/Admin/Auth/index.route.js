import { AdminLogin } from "../../../pages";
import routesMap from "../../../routeControl/userRoutMap";

function route() {
  return [
    {
      path: routesMap.ADMINLOGIN.path,
      name: "Login",
      key: routesMap.ADMINLOGIN.path,
      commonRoute: true,
      private: false,
      element: <AdminLogin />,
    }
  ]
}

export default route;