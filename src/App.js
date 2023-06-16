import React from 'react';
import { BrowserRouter as Router, Route, useRoutes } from 'react-router-dom';
import './App.css';
import { routes } from "./route/index";

function RouteLayout({ path }) {
  const element = useRoutes(path);
  console.log("on the app.js");
  return element;
}

function App() {
  return (
    <Router>
      <div className="App">
        <RouteLayout path={routes()} />
      </div>
    </Router>
  );
}

export default App;
