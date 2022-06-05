import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";

const CartProduct = ({ product: { image, price, quantity } }) => {
  return (
    <div>
      <div className="cart-item">
        <img src={urlFor(image && image[0])} width={10} height={10} />
        <h4> {quantity}</h4>
        <h2>{price * quantity}</h2>
      </div>
    </div>
  );
};

export default CartProduct;
