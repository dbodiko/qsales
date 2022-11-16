import {Route, Routes} from "react-router-dom";
import Login from "./components/login";
import StaffList from "./components/staffs.list"
import ClientList from "./components/clients.list";
import DocumentList from "./components/documents.list";
import RoutesList from "./components/routes.list";
import EditRoute from "./components/routes.list/edit.route";


const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/staffs" element={<StaffList/>}/>
            <Route path="/clients" element={<ClientList/>}/>
            <Route path="/documents" element={<DocumentList/>}/>
            <Route path="/routes" element={<RoutesList/>}/>
            <Route path="/routeedit/:code/:name" element={<EditRoute/>}/>
        </Routes>
    )
}

export default Index;