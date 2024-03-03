import { React, Suspense } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import { Routes } from "./route";
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
  return (
    <Router>
      <Suspense >
        <Sidebar>
           <RouteLayout path={Routes()} />
        </Sidebar>
      </Suspense>
    </Router>
  );
}

export default App;
