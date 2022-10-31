import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


const Route = ({code, name}) => {

    return (
        <tr>
            <td>{code}</td>
            <td>{name}<NavLink to="/clients"><FontAwesomeIcon className="px-3" icon={faPenToSquare}/></NavLink></td>
        </tr>
    )
}

export default Route;