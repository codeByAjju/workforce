import { UserMessage } from "../../../pages";
import routesMap from "../../../routeControl/userRoutMap";
export default function route() {
  return [
    {
      path: routesMap.MESSAGE.path,
      name: "Message",
      key: routesMap.MESSAGE.path,
      commonRoute: true,
      private: false,
      withAuth: true,
      belongsToHeader: true,
      element: <UserMessage/>,
    }
  ];
}
