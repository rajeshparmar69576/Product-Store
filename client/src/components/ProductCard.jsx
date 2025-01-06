import React from 'react';

const ProductCard = ({ product, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-brand-purple mb-2">
          {product.name}
        </h3>
        <p className="text-gray-700 mb-4">
          ${product.price}
        </p>
        <div className="flex justify-between">
          <button 
            onClick={() => onEdit(product)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(product._id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
