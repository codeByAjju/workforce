import homeRoutes from "./Home/index.route";
import hr from "./HR/index.route";
import work from "./Work/index.route"
import message from "./Message/index.route"
export default function route(){
    return [
    ...homeRoutes(),
     ...hr(),
     ...work(),
     ...message(),
    ]
}