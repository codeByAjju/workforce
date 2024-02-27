import routesMap from "../../../routeControl/userRoutMap";
import {
  UserAttendance,
  UserHoliday,
  UserLeaves,
  UserPunchInReport,
} from "../../../pages";

export default function route() {
  return [
    {
      path: routesMap.LEAVES.path,
      name: "Leaves",
      key: routesMap.LEAVES.path,
      commonRoute: true,
      private: false,
      withAuth: true,
      belongsToHeader: true,
      element: <UserLeaves />,
    },
    {
      path: routesMap.ATTENDANCE.path,
      name: "Attendance",
      key: routesMap.ATTENDANCE.path,
      commonRoute: true,
      private: false,
      withAuth: true,
      belongsToHeader: true,
      element: <UserAttendance />,
    },
    {
      path: routesMap.HOLIDAY.path,
      name: "Holiday",
      key: routesMap.HOLIDAY.path,
      commonRoute: true,
      private: false,
      withAuth: true,
      belongsToHeader: true,
      element: <UserHoliday />,
    },
    {
      path: routesMap.PUNCH_IN_REPORT.path,
      name: "Punch-In Report",
      key: routesMap.PUNCH_IN_REPORT.path,
      commonRoute: true,
      private: false,
      withAuth: true,
      belongsToHeader: true,
      element: <UserPunchInReport />,
    },
  ];
}
