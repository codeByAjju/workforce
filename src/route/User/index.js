import { PublicLayout } from "../../layouts";
import publicRoutes from "./public.route";

export const userRoutes = () => {
  return [
    {
      element: <PublicLayout />,
      children: [...publicRoutes()]
    }
  ];
};
