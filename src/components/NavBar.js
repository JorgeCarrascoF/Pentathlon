// import { Router, Link } from "react-router-dom";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="menu">
      <span><Link to='/'>PENTATHLON</Link></span>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    </nav>
  );
};
