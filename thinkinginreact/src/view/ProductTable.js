import React from 'react'
import ProductCategoryRow from '../components/ProductCategoryRow';
import ProductRow from '../components/ProductRow';

export default ({products}) => {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
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