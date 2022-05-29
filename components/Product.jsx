import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-container">
          <img src={urlFor(image && image[0])} width={250} height={250} />
          <p>{name}</p>
          <h5>${price}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Product;
