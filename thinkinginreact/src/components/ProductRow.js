import React from 'react'

export default ({stocked, price, name}) => {
    const stockedName = stocked ? name : <span style={{color:'red'}}>{name}</span>
    return (
        <tr>
            <td>{stockedName}</td>
            <td>{price}</td>
            
        </tr>
    )
}