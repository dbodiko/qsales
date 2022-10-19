import {Container, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import {useEffect, useState} from "react";

import Menu from "../navbar";
import Staffs from "../staff";
import useApi from "../../hooks/useApi";


const StaffList = () => {
    const api = useApi()

    const [staffs, setStaffs] = useState({
        staff: []
    })

    useEffect(() => {
        getAllStaffs()
    }, []);

    const getAllStaffs = async () => {
        const staff = await api.getAllStaffs()
        setStaffs({staff})
    }

    return (
        <section>
            <Menu/>
            <Container>

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>код</th>
                        <th>Назва</th>
                        <th>Телефон</th>
                    </tr>
                    </thead>
                    <tbody>
                    {staffs.staff.map((staff) => (
                        <Staffs key={staff.code}
                                {...staff}
                        />
                    ))}
                    </tbody>
                </Table>
            </Container>
        </section>

    )
}

export default StaffList;