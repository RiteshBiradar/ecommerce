import React from 'react';

const ProductCard = ({ image, name, price, description, addedTime }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="w-full aspect-[4/3] overflow-hidden rounded-t-md">
      <img
        src={image}
        alt="Product"
        className="w-full h-full object-cover"
      />
    </div>
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