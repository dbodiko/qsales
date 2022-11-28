import React, {useEffect, useState} from 'react';
import NavbarMenu from "../../navbar";
import {Container, Table} from "react-bootstrap";

import './style.css'
import {useParams} from "react-router-dom";
import useApi from "../../../hooks/useApi";
import Goods from "./goods";

const DocumentInfo = (props) => {

    const api = useApi()

    let {id} = useParams()

    const [document, setDocument] = useState({
        docRows: []
    })

    useEffect(() => {
        getDocument()
    }, []);

    const getDocument = async () => {
        const document = await api.getDocument({documentId: id})
        setDocument(document)
    }

    return (
        <section>
            <NavbarMenu/>

            <Container>

                <section className='info-wrapper'>

                    <h4>Деталі документу</h4>

                    <div className='info'>

                        <div className='info-data'>
                            <p>Тип докумету: </p>
                            <p>Клієнт: </p>
                            <p>Адреса: </p>
                            <p>Торговий: </p>
                        </div>

                        <div className='info-text'>
                            <p>{document.docTypeName} від {document.docDate} </p>
                            <p>{document.customerName} </p>
                            <p>{document.customerAddress}</p>
                            <p>{document.staffName}</p>
                        </div>

                    </div>
                </section>

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Назва товару</th>
                        <th>Кількість</th>
                        <th>Одиниці виміру</th>
                        <th>Ціна</th>
                        <th>Сума</th>
                    </tr>
                    </thead>
                    <tbody>
                    {document.docRows.map((doc) => (
                        <Goods key={doc.documentId}
                               {...doc}/>
                    ))}
                    </tbody>
                </Table>
            </Container>
        </section>
    )
}

export default DocumentInfo;