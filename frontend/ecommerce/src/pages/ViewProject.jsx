import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard.jsx';

export default function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/v1/products/getProduct?search=${searchTerm}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : products.length === 0 ? (
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
