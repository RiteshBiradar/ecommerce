// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import AddProduct from './pages/AddProject.jsx';
import ViewProducts from './pages/ViewProject.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const fetchProducts = async () => {
    try {
      const res = await fetch(`${baseUrl}api/v1/products`);
      const data = await res.json();
      console.log('Fetched products:', data);
      setProducts(data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <Header />
      <div className="p-6 max-w-7xl mx-auto">
      <ToastContainer />
        <Routes>
          <Route path="/" element={<AddProduct onAdd={fetchProducts} />} />
          <Route path="/view" element={<ViewProducts products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}