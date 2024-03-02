import { AdminMainLayout, MainLayout } from "../layouts";
import { userRoutes } from "./User";
import { adminRoutes } from "./Admin";
export const Routes = () => {
  return [
    {
      element: <MainLayout />,
      children: [...userRoutes()],
    },
    {
      element: <AdminMainLayout />,
      children: [...adminRoutes()]
    }
  ];
};

export const routesList = () => {
  let routeArr = [
      ...adminRoutes()[0].children,
      ...adminRoutes()[1].children,
      ...userRoutes()[0].children,
      ...userRoutes()[1].children,
  ];
  return [...routeArr];
};


export const getCompletePathList = () => {
  return routesList().reduce((prev, curr) => {
      prev.push(curr);
      if (curr.children) {
          prev.push(...curr.children);
      }
      return prev;
  }, []);
};