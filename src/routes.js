import {Route, Routes} from "react-router-dom";
import Login from "./components/login";
import StaffList from "./components/staffs.list"
import ClientList from "./components/clients.list";
import DocumentList from "./components/documents.list";


const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/staffs" element={<StaffList/>}/>
            <Route path="/clients" element={<ClientList/>}/>
            <Route path="/documents" element={<DocumentList/>}/>
        </Routes>
    )
}

export default Index;