import './style.css'

import React, {useEffect, useState} from 'react';
import NavbarMenu from "../navbar";
import {Table} from "react-bootstrap";
import useApi from "../../hooks/useApi";
import Pages from "../pagination";

import Document from "./document";

let pageSize = 10
let currentPage = 0

const DocumentList = () => {
    const api = useApi()


    const [documents, setDocuments] = useState({
        items: [],
        total: undefined
    })


    useEffect(() => {
        getAllDocuments()
    }, [])


    const getAllDocuments = async (page = 1, pageSize = 10) => {
        currentPage = page
        const documents = await api.getAllDocuments({
            pageSize: pageSize,
            page: page,

        })
        setDocuments(documents)
    }

    const onChangePage = (page) => {
        getAllDocuments(page)
    }

    const getPageCount = () => {
        return Math.ceil(documents.total / pageSize)
    }

    return (
        <section>
            <NavbarMenu/>
            <div className="m-4">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Дата документа</th>
                        <th>Торговий агент</th>
                        <th>Клієнт</th>
                        <th>Сума</th>
                        <th>Тип документа</th>
                        <th>Примітка</th>
                        <th>Час початку вводу</th>
                        <th>Час отримання</th>
                    </tr>
                    </thead>
                    <tbody>

                    {documents.items.map((doc) => (
                        <Document key={doc.id}
                                  {...doc}/>
                    ))}

                    </tbody>
                </Table>
                <Pages onChange={onChangePage}
                       active={currentPage}
                       pages={getPageCount()}
                       maxButtons={3}/>
            </div>
        </section>
    )
}

export default DocumentList;