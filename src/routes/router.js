import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/Landing";

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} exact />
    </Routes>
  );
};

export default RouteController;
