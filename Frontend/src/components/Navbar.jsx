import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow bg-white fixed w-full top-0 z-50">
      {/* Logo + Site Name */}
      <Link to="/" className="flex items-center space-x-2">
        <span className="text-[#535bf2] font-extrabold text-2xl">Road Safety Audit</span>
      </Link>

      {/* Menu */}
      <ul className="flex items-center space-x-8 font-medium">
        {/* Home */}
        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        {/* Solutions Dropdown (hover) */}
        <li className="relative group">
          <button
            className="text-[#535bf2] bg-transparent"
            style={{ backgroundColor: "transparent" }}
          >
            Solutions ▾
          </button>
          <ul className="absolute left-0 bg-white border border-gray-200 shadow-lg rounded-lg mt-2 w-48 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
            <li className="px-4 py-2 hover:bg-blue-50">
              <Link to="/solution1">Pavement Survey</Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-50">
              <Link to="/solution2">Road Audit</Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-50">
              <Link to="/solution3">Traffic Survey</Link>
            </li>
          </ul>
        </li>

        {/* Resources Dropdown (hover) */}
        <li className="relative group">
          <button
            className="text-[#535bf2] bg-transparent"
            style={{ backgroundColor: "transparent" }}
          >
            Resources ▾
          </button>
          <ul className="absolute left-0 bg-white border border-gray-200 shadow-lg rounded-lg mt-2 w-48 text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
            <li className="px-4 py-2 hover:bg-blue-50">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-50">
              <Link to="/policy">Privacy Policy</Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-50">
              <Link to="/terms">Terms of Use</Link>
            </li>
          </ul>
        </li>

        {/* Other Menu Items */}
        <li><Link to="/company" className="text-gray-800 hover:text-blue-600">Company</Link></li>
        <li><Link to="/career" className="text-gray-800 hover:text-blue-600">Career</Link></li>
      </ul>

      {/* Contact Us Button */}
      <Link to="/contact">
        <button className=" py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
