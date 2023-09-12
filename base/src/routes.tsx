import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import { getToken } from "./utils/storage";

function ProtectedRoutes({ redirectTo }: any): any {
  const authorization = getToken('token');
  return authorization ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />

      <Route element={<ProtectedRoutes redirectTo={"/"} />}>
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  )
}

export default MainRoutes