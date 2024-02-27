import routesMap from "../../../routeControl/userRoutMap";
import { UserProject, UserTimeLogs } from "../../../pages";
export default function route() {
  return [
    {
      path: routesMap.PROJECT.path,
      name: "Projects",
      key: routesMap.PROJECT.path,
      commonRoute: true,
      private: false,
      withAuth: true,
      belongsToHeader: true,
      element: <UserProject/>,
    },
    {
      path: routesMap.TIMELOGS.path,
      name: "Time Logs",
      key: routesMap.TIMELOGS.path,
      commonRoute: true,
      private: false,
      withAuth: true,
      belongsToHeader: true,
      element: <UserTimeLogs />,
    },
  ];
}
