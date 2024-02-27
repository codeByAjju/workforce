import { AdminDashBoard } from "../../../pages";
import routesMap from "../../../routeControl/userRoutMap";
// import routesMap from "../../../routeControl/userRouteMap";

export default function route() {
    return [
        {
            path: routesMap.ADMINDASH.path,
            name: "adminDashboard",
            key: routesMap.ADMINDASH.path,
            private: true,
            commonRoute: false,
            element: <AdminDashBoard />,
        }
    ]
}