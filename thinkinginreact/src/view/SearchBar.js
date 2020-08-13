import React from 'react'

export default ({filterText, inStockOnly}) => {
    return (
        <form>
        {/* E2-state */}
            <input type="text" placeholder="Search..." value={filterText}/>
            <p>
                <input 
                    type="checkbox"
                    checked={inStockOnly}
                />
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}