import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import routes from "./routes";

import NewUserPage from "@/pages/NewUser";
import DashboardPage from "@/pages/Dashboard";

const Router = () => {
  return (
    <div style={{ paddingTop: 64, height: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.dashboard} element={<DashboardPage />} />
          <Route path={routes.newUser} element={<NewUserPage />} />
          <Route path="/" element={<Navigate to={routes.dashboard} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
