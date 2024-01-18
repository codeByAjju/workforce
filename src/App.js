import React from "react";
import { BrowserRouter as Router, Route, useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./route/index";
import Sidebar from "./components/Dashboard/Sidebar";

function RouteLayout({ path }) {
  const element = useRoutes(path);
  return element;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar>
          <RouteLayout path={routes()} />
        </Sidebar>
      </div>
    </Router>
  );
}

export default App;
