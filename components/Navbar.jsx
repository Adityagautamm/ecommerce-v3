import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { Cart } from "./";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const toggleShowCart = () => {
    var toggler = !showCart;
    setShowCart(toggler);
  };
  return (
    <div>
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
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </div>
      </div>
      <div> {showCart && <Cart />}</div>
    </div>
  );
};

export default Navbar;
