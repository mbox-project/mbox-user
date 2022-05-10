import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteController from "./routes/router";

function App() {
  return (
    <Router>
      <RouteController />
    </Router>
  );
}

export default App;
