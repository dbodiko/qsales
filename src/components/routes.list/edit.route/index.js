import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import NavbarMenu from "../../navbar";
import {useParams} from "react-router-dom";
import useApi from "../../../hooks/useApi";
import Button from "@mui/material/Button";

import './style.css'
import ClientRoute from "./client.route";
import StaffRoute from "./staff.route";

const EditRoute = () => {

    let {name, code} = useParams()

    const api = useApi()

    const [clientsStaffs, setClientsStaffs] = useState({
        customers: [],
        staffs: []
    })

    useEffect(() => {
        getClientStaffRoutes()
    }, []);

    const getClientStaffRoutes = async () => {
        const clientsStaffs = await api.getClientStaffRoutes({routeCode: code})
        setClientsStaffs(clientsStaffs)
    }

    return (
        <section>
            <NavbarMenu/>

            <h4 className="mt-3">{name}</h4>

            <Container className="pt-3">
                <Tabs
                    defaultActiveKey="client"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                    fill
                >
                    <Tab eventKey="client" title="Клієнти привязані до маршруту">
                        <div className="input">
                            <input className="text-field__input" type="text"
                                   placeholder="Введіть назву чи адресу клієнта"/>
                            <Button variant="outlined">Додати</Button>
                        </div>

                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Клієнт</th>
                                <th>Адреса</th>
                            </tr>
                            </thead>
                            <tbody>
                            {clientsStaffs.customers.map((client) => (
                                <ClientRoute key={client.id}
                                             {...client}/>
                            ))}
                            </tbody>
                        </Table>

                    </Tab>
                    <Tab eventKey="staff" title="Торгові привязані до маршруту">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Код</th>
                                <th>Працівник</th>
                            </tr>
                            </thead>
                            <tbody>
                            {clientsStaffs.staffs.map((staff) => (
                                <StaffRoute key={staff.staffCode}
                                            {...staff}/>
                            ))}
                            </tbody>
                        </Table>
                    </Tab>

                </Tabs>
            </Container>

        </section>
    )
}

export default EditRoute;