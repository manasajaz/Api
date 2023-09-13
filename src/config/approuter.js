import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login";
import DashboardPage from "../dashboard";
import Projects from "../dashboardpages/project";
import AddProject from "../dashboardpages/addproject";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="dashboard/*" element={< DashboardPage />} />
          <Route path="/" element={<Projects />} />
          <Route path="add/" element={< AddProject />} />
          <Route path="add/:id" element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
