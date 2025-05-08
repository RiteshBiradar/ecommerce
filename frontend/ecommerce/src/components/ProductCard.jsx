import React from 'react';

const ProductCard = ({ image, name, price, description, addedTime }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Product" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-gray-900 text-lg">{price}</span>
        <span className="text-sm text-gray-500">{addedTime}</span>
      </div>
    </div>
  );
};

export default ProductCard;