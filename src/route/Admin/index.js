import { AdminMainLayout, PrivateLayout } from "../../layouts"
import adminPublicRoutes from "./public.route";
import adminPrivateRoutes from "./private.route"
export const adminRoutes = () => {
  return [
    {
      element: <AdminMainLayout />,
      children: [...adminPublicRoutes()]
    },
    {
      element: <PrivateLayout/>,
      children:[...adminPrivateRoutes()]
    }
  ]
}