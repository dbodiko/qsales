import {Container, Table} from 'react-bootstrap';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import {useEffect, useState} from "react";

import Menu from "../navbar";
import useApi from "../../hooks/useApi";
import Pages from "../pagination";
import Route from "./route"
import AddNewRoute from "./route.addnew";

const pageSize = 5
let currentPage = 1

const RoutesList = () => {
    const api = useApi()

    const [routes, setRoutes] = useState([])
    const [totalPages, setTotalPages] = useState()
    const [isAutocompleteSelected, setIsAutocompleteSelected] = useState(true)

    const [modalShow, setModalShow] = useState(false)

    const [staffs, setStaffs] = useState({
        staff: []
    })

    useEffect(() => {
        getRoutes()
        getAllStaffs()
    }, []);


    const getRoutes = async (page = 1) => {
        const routes = await api.getRoutes({
            pageSize: pageSize,
            page: page,
        });
        setRoutes(routes.items);
        setTotalPages(routes.total)
    }

    const getAllStaffs = async () => {
        const staff = await api.getAllStaffs()
        setStaffs({staff})
    }

    const onChangePage = (page) => {
        getRoutes(page)
    }

    const getPageCount = () => {
        return Math.ceil(totalPages / pageSize)
    }

    let staffsList = staffs.staff

    const getStaffsByCode = async (autocompleteValue) => {
        let routes = []
        if (autocompleteValue) {
            routes = await api.getRouteByCode({
                staffCodes: [autocompleteValue.code]
            });
        } else {
            getRoutes()
        }

        //let routes = (autocompleteValue) ? await api.getRouteByCode({staffCodes: [autocompleteValue.code]}) : getRoutes()

        setRoutes(routes);

        if (autocompleteValue !== null) {
            setIsAutocompleteSelected(false)
        } else {
            setIsAutocompleteSelected(true)
        }
    }

    const handleSave = async (name, code) => {
        try {
            await api.addNewRoute([{name: name, code: code}])
            getRoutes()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section>
            <Menu/>

            <Container>

                <div className="m-4">

                    <div className="d-flex justify-content-evenly pb-4">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={staffsList}
                            size={"small"}
                            sx={{width: 250}}
                            //onClick={(e) => setIsActive(false)}
                            onChange={(e, value) => getStaffsByCode(value)}
                            getOptionLabel={(option) => option.name || ""}
                            renderInput={(params) => <TextField {...params} label="Працівники"/>}
                        />

                        <Button variant="outlined"
                                onClick={() => setModalShow(true)}
                                disabled={isAutocompleteSelected}>
                            Додати новий маршрут
                        </Button>
                        <AddNewRoute show={modalShow}
                                     onHide={() => setModalShow(false)}
                                     handleSave={handleSave}/>
                    </div>


                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Код</th>
                            <th>Назва марашруту</th>
                        </tr>
                        </thead>
                        <tbody>
                        {routes.map((route) => (
                            <Route key={route.code}
                                   {...route}/>
                        ))}
                        </tbody>
                    </Table>

                    {isAutocompleteSelected && (
                        <Pages onChange={onChangePage}
                               active={currentPage}
                               pages={getPageCount()}
                               maxButtons={3}/>
                    )}

                </div>

            </Container>
        </section>
    )
}

export default RoutesList;