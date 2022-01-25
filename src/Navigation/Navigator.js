import { Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "../components/ProtectedRoute"
import Activity from "../pages/activity"
import Contact from "../pages/contact"
import Home from "../pages/home"
import Login from "../pages/login"
import Register from "../pages/register"


export const Navigation = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />} >
                <Route path="/" element={<Home />} />
                <Route path="/admin/contact" element={<Contact />} />
                <Route path="/admin/activity" element={<Activity />} />
            </Route>
        </Routes>


    )
}