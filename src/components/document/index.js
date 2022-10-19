import React from 'react';


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

    return (
        <tr className={className}>
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