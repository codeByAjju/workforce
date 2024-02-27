import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  LEAVES: {
    path: `${baseRoutes.userBaseRoutes}leaves`,
  },
  ATTENDANCE: {
    path: `${baseRoutes.userBaseRoutes}attendance`,
  },
  HOLIDAY: {
    path: `${baseRoutes.userBaseRoutes}holiday`
  },
  PUNCH_IN_REPORT: {
    path: `${baseRoutes.userBaseRoutes}punch-in-report`
  }
};

export default accessRoute;
