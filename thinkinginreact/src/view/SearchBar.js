import React from 'react'

export default () => {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <p>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}