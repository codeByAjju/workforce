import { React } from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import { routes } from "./route/index";
import Sidebar from "./components/Dashboard/Sidebar";
import { Unknown } from "./components";

function RouteLayout({ path }) {
  const element = useRoutes(path);
  if (!element) {
    return <Unknown />;
  }
  return element;
}

function App() {
  // const location = useLocation();

  // let path =
  //   location.pathname.search(baseRoutes.userBaseRoutes.replace("/", "")) >= 0
  //     ? "admin"
  //     : "user";

  return (
    <Router>
      <div className="App">
        <Sidebar>
          <RouteLayout path={routes()} />
        </Sidebar>
      </div>
    </Router>
    // <Suspense fallback={(path = "user" && <FullPageLoader />)}>
    //   <RouteLayout path={routes()} />
    // </Suspense>
  );
}

export default App;
