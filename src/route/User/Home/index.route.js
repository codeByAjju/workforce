import routesMap from "../../../routeControl/userRoutMap";
import { Home } from "../../../pages";

export default function route() {
  return [
    {
      path: routesMap.HOME.path,
      name: "Home",
      key: routesMap.HOME.path,
      commonRoute: true,
      private: true,
      withAuth: true,
      belongsToHeader: true,
      element: <Home />,
    },
  ];
}
