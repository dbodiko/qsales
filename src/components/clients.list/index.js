import ".//style.css"

import {Container, Table} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


import {useEffect, useState} from "react";


import Clients from "./client";
import useApi from "../../hooks/useApi";
import Pages from "../pagination";
import NavbarMenu from "../navbar";

const pageSize = 5
let currentPage = 0

const ClientList = () => {
    const api = useApi()

    const [clients, setClients] = useState({
        items: [],
        total: undefined,
    })

    const [searchClients, setSearchClients] = useState('')

    useEffect(() => {
        getAllClients()
    }, []);


    const getAllClients = async (page = 1) => {
        currentPage = page;
        let currentConditions = null;
        if (searchClients.length < 2) {

        } else {
            currentConditions = [`Name.ToUpper().Contains(\"${searchClients.toUpperCase()}\")`, `Address.ToUpper().Contains(\"${searchClients.toUpperCase()}\")`]
        }

        const clients = await api.getAllClients({
            pageSize: pageSize,
            page: page,
            orderByProperty: "code",
            ascending: true,
            conditions: currentConditions
        });
        setClients(clients);
    }

    const onChangePage = (page) => {
        getAllClients(page)
    }

    const getPageCount = () => {
        return Math.ceil(clients.total / pageSize)
    }

    const handleSearch = () => {
        getAllClients()
    }


    return (
        <section>
            <NavbarMenu/>

            <div className="search__container">
                <input className="search__input"
                       value={searchClients}
                       type="text"
                       placeholder="Пошук"
                       onChange={(e) => setSearchClients(e.target.value)}/>
                <FontAwesomeIcon className="search__icon"
                                 icon={faMagnifyingGlass}
                                 onClick={handleSearch}/>
            </div>

            <Container>
                <Table striped bordered hover>
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
            </Container>
        </section>
    )
}

export default ClientList;