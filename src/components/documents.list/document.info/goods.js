import React from 'react';

const Goods = ({goodName, quantity, goodUnitName, summa}) => {
    return (
        <tr>
            <td>{goodName}</td>
            <td>{quantity}</td>
            <td>{goodUnitName}</td>
            <td>{summa / quantity}</td>
            <td>{summa}</td>
        </tr>
    )
}

export default Goods;