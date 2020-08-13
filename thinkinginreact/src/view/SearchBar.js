import React from 'react'

export default ({filterText, inStockOnly, onFilterText, onInStockOnly}) => {
    return (
        <form>
        {/* E2-state */}
            <input 
                type="text" 
                placeholder="Search..." 
                value={filterText}
                //E3-Inverse Data Flow Step1:apply updated value to inverse function
                onChange={onFilterText(e.target.value)}
                />
            <p>
                <input 
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={onInStockOnly(e.target.value)}
                />
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}