import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        BlogSpace
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create" className="create-btn">
          Create Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;