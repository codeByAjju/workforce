import { MainLayout } from "../layouts";
import { userRoutes } from "./User";
export const routes = () => {
  return [
      {
        element: <MainLayout />,
        children: [...userRoutes()]
      }
    ];
  };