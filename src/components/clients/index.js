import React from 'react';

const Clients = ({code, name, address, phone}) => {

    return (
        <tr>
            <td>{code}</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phone}</td>
        </tr>
    )
}

export default Clients;