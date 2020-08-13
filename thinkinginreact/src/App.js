import React, { useState } from 'react';
import './App.css';
import SearchBar from './view/SearchBar';
import ProductTable from './view/ProductTable';

function App({products}) {
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
  //E2-State
  const [filterText, setFilter] = useState('');
  const [inStockOnly, setInStock] = useState(false);

  return (
    <div className="App">
        <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
        />
        <ProductTable 
          products={PRODUCTS} 
          filterText={filterText} 
          inStockOnly={inStockOnly}
          />
    </div>
  );
}

export default App;
