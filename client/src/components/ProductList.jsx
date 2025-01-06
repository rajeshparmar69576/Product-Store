import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard 
          key={product._id} 
          product={product} 
          onDelete={onDelete} 
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
};

export default ProductList;
