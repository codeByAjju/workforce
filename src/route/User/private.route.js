import { PrivateLayout, PublicLayout } from "../../layouts";
import publicRoutes from "./public.route"
// import privateRoutes from "./"
export default function route(){
    return [
        {
            element: <PublicLayout />,
            children: [...publicRoutes()],
          },
          // {
          //   element: <PrivateLayout />,
          //   children: [...privateRoutes()],
          // },
    ]
}