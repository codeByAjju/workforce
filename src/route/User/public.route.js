import homeRoutes from "./Home/index.route";
import auth from "./Auth/index.route";
import hr from "./HR/index.route";
import work from "./Work/index.route"
import message from "./Message/index.route"
export default function route() {
    return [
     ...homeRoutes(),
     ...auth(),
     ...hr(),
     ...work(),
     ...message(),
        
    ]
}