import React from 'react';

import { client } from '../lib/client';
import { HomeBanner, Product } from '../components';
const Home = ({ products, bannerData }) => {
  return (
    <div>
      <  HomeBanner bannerData={bannerData[0]} />
      {console.log(products)}
      <div className='products-container'>
        {products.map((product) => <Product product={product} />)}
      </div>
      <div>index</div>
    </div>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home