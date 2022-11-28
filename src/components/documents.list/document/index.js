import React from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const Document = ({
                      id,
                      modified,
                      docTypeName,
                      staffName,
                      customerName,
                      docDate,
                      docTime,
                      summa,
                      memo,
                      status
                  }) => {

    let className = (status === 2) ? 'changeBG' : ''
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/document/info/${id}`, {replace: true})
    }

    return (

            <tr className={className} onClick={handleClick}>
                <td>{id}</td>
                <td>{modified}</td>
                <td>{staffName}</td>
                <td>{customerName}</td>
                <td>{summa}</td>
                <td>{docTypeName}</td>
                <td>{memo}</td>
                <td>{docTime}</td>
                <td>{docDate}</td>
            </tr>

    )
}

export default Document;