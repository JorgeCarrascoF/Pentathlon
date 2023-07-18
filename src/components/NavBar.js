// import { Router, Link } from "react-router-dom";
import "../styles/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="menu">
      <span>PENTATHLON</span>
      <div>
        <span>Home</span>
        <span>Products</span>
        <span>Cart</span>
      </div>
    </nav>
  );
};
