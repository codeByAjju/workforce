import userRoutes from "./User";
import adminRoutes from "./Admin";
const routesMap = {
  ...userRoutes,
  ...adminRoutes,
};
export default routesMap;
