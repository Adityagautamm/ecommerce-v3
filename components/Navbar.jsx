import Link from "next/link";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          <Link href={"/"}>
            <h3>Sneaker Store</h3>
          </Link>
        </div>
        <div className="navigation">
          <a href="#">Mens</a>
          <div className="navigation-content">
            <a href="#">Lifestyle</a>
            <a href="#">Tennis</a>
            <a href="#">Basketball</a>
            <a href="#">Football</a>
            <a href="#">AFL</a>
          </div>
        </div>
        <div className="navigation">
          <a href="#">Womens</a>
          <div className="navigation-content">
            <a href="#">Lifestyle</a>
            <a href="#">Tennis</a>
            <a href="#">Basketball</a>
            <a href="#">Football</a>
            <a href="#">AFL</a>
          </div>
        </div>
        <div className="navigation">
          <a href="#">Accessories</a>
          <div className="navigation-content">
            <a href="#">Socks</a>
            <a href="#">Cleaning Kit</a>
            <a href="#">Laces</a>
          </div>
        </div>
      </div>

      <div className="cart">
        <button type="button" className="cart-icon" onClick="">
          <AiOutlineShopping />
          <span className="cart-item-qty">1</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
