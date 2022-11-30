import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
// import { ProductsContext } from '../context/products-context';

import { useStore } from '../hooks-store/store';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  const state = useStore()[0];

  // const productCtx = useContext(ProductsContext);

  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
      {/* {productCtx.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))} */}
      {/* {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))} */}
    </ul>
  );
};

export default Products;
