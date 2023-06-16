import homeRoutes from "./Home/index.route";
import auth from "./Auth/index.route";

export default function route() {
    return [
     ...homeRoutes(),
     ...auth()
        
    ]
}