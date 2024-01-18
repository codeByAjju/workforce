import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  HOME: {
    path: `${baseRoutes.userBaseRoutes}`,
  },
  DASHBOARD: {
    path: `${baseRoutes.userBaseRoutes}dashboard`,
  },
  SIGNUP: {
    path: `${baseRoutes.userBaseRoutes}signup`
  },
  LOGIN: {
    path: `${baseRoutes.userBaseRoutes}login`
  }
};

export default accessRoute;
