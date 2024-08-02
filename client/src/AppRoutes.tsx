import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>HOME</Layout>}></Route>
      <Route path="/user-profile" element={<span>USER PROFILE</span>}></Route>
      <Route path="*" element={<Navigate to={"/"} />}></Route>
    </Routes>
  );
};

export default AppRoutes;
