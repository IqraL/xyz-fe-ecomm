import React from 'react';
import { useQuery } from "@apollo/client";

import { gql } from "../__generated__/gql";

const GET_ALL_PRODUCTS = gql(/* GraphQL */ `
  query GetAllProducts {
    getAllProducts {
      id
      title
      price
      thumbnail
    }
  }
`);

export function AllProducts() {
  // our query's result, data, is typed!
  const { loading, data } = useQuery(
    GET_ALL_PRODUCTS
  );

  console.log("data    ", data);    
  return (
    <div>
      <h3>Available Inventory</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {/* {data?.getAllProducts.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))} */}
        </ul>
      )}
    </div>
  );
}

const Test = () => {
  return <div>Test</div>;
}