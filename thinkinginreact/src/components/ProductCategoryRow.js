import React from 'react'

export default ({category}) => {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    )
}