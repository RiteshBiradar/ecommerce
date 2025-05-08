import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProduct({ onAdd }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price) {
      toast.error('❌ Name and price are required');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/v1/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...product,
          price: parseFloat(product.price),
        }),
      });

      if (res.ok) {
        toast.success('Product added successfully!', { autoClose: 3000 });
        onAdd(); 
        setProduct({ name: '', price: '', description: '', imageUrl: '' });
      } else {
        toast.error('❌ Failed to add product');
      }
    } catch (err) {
      console.error(err);
      toast.error('⚠️ Network error. Please try again.');
    }
  };
  return (
    <>
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-2">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium">Product Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Product name"
                  value={product.name}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 mt-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="99.99"
                  value={product.price}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 mt-1"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter the price in your local currency.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  placeholder="Describe your product..."
                  value={product.description}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 mt-1"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Image URL (Optional)</label>
                <input
                  type="url"
                  name="imageUrl"
                  placeholder="https://example.com/image.jpg"
                  value={product.imageUrl}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter a URL to an image of your product.
                </p>
              </div>
        <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded cursor-pointer">
          Add Product
        </button>
      </form>
    </div>
    </>
  );
}
