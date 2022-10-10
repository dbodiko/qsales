import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import StaffList from "./components/staff.list"
import ClientList from "./components/client.list";


const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/staffs" element={<StaffList />} />
            <Route path="/clients" element={<ClientList/>} />
        </Routes>
    )
}

export default Index;