import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import react, {useEffect, useState} from "react";

import Menu from "../navbar";
import Clients from "../clients";
import useApi from "../../hooks/useApi";
import Pages from "../pagination";

const pageSize = 5
let currentPage = 0

const ClientList = (props) => {
    const api = useApi()

    const [clients, setClients] = useState({
        items: [],
        total: undefined,
    })

    useEffect(() => {
        getAllClients()
    }, []);


    const getAllClients = async (page = 1) => {
        currentPage = page;
        const clients = await api.getAllClients({pageSize: pageSize, page: page, orderByProperty: "code", ascending: true});
        setClients(clients);
    }

    const onChangePage = (page) => {
        getAllClients(page)
    }

    const getPageCount = () => {
        return Math.ceil(clients.total / pageSize)
    }


    return (
        <section>
            <Menu/>
                <Form.Control
                    type="search"
                    placeholder="Search..."
                    className="container"
                    aria-label="Search"
                />
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Клієнт</th>
                    <th>Адреса</th>
                    <th>Телефон</th>
                </tr>
                </thead>
                <tbody>
                {clients.items.map((client) => (
                    <Clients key={client.code}
                             {...client}/>
                ))}
                </tbody>
            </Table>
            <Pages onChange={onChangePage}
                   active={currentPage}
                   pages={getPageCount()}
                   maxButtons={3}/>
        </section>
    )
}

export default ClientList;