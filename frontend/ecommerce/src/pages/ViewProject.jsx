// ViewProducts.jsx
import ProductCard from '../components/ProductCard.jsx';

export default function ViewProducts({ products }) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-600">No products available (yet).</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.imageUrl}
              name={product.name}
              price={`$${parseFloat(product.price).toFixed(2)}`}
              description={product.description}
              addedTime={new Date(product.createdAt).toLocaleString()}
            />
          ))}
        </div>
      )}
    </div>
  );
}