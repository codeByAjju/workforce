import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  PROJECT: {
    path: `${baseRoutes.userBaseRoutes}projects`,
  },
  TIMELOGS: {
    path: `${baseRoutes.userBaseRoutes}time-logs`,
  }
};

export default accessRoute;
