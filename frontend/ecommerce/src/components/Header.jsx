import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">E-Commerce Dashboard</h1>
      <div className="space-x-4">
        <Link
          to="/"
          className={`px-4 py-2 rounded ${pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
        >
          Add Product
        </Link>
        <Link
          to="/view"
          className={`px-4 py-2 rounded ${pathname === '/view' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
        >
          View Products
        </Link>
      </div>
    </header>
  );
}
