import { ReactElement, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import { Teacher } from "./types/types";
import { getToken } from "./utils/storage";
import TeacherDetails from "./pages/TeacherDetails";

type Props = {
  redirectTo: string
}

function ProtectedRoutes({ redirectTo }: Props /* OU { redirectTo: string }*/): ReactElement {
  const authorization = getToken('token');
  return authorization ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />

      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/main" element={<Main teachers={teachers} setTeachers={setTeachers} />} />
        <Route path="/teacher/:id" element={<TeacherDetails teachers={teachers} />} />
      </Route>
    </Routes>
  )
}

export default MainRoutes