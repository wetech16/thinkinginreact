import React from 'react'
import ProductCategoryRow from '../components/ProductCategoryRow';
import ProductRow from '../components/ProductRow';

export default ({products, filterText,inStockOnly}) => {
    //E1-componets
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        //E2-state
        if (product.name.indexOf(filterText) === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        //E1-componets
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow 
                category={product.category}
                key={product.category} />
            );
        }
        rows.push(
            <ProductRow 
            {...product}
            key={product.name} />   
        );
        lastCategory = product.category;
    })

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
      </table>
    )
}