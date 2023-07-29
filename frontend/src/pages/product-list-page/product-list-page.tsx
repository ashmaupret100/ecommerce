import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Container from "../../components/container";

function ProductList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data from axios
    axios
      .get(" https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    // Log the fetched data whenever it changes
    console.log(data);
  }, [data]);
  return (
    <>
      <Container />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-20">
        {data.map((product) => (
          <div className="flex flex-col bg-white border rounded-lg shadow-md p-4">
            <div className="w-full h-48 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-between items-center mb-2 p-1">
              <span className="font-bold text-base line-clamp-2">
                {product.title}
              </span>
              <span className="text-gray-600 ">${product.price}</span>
            </div>
            <div className="text-gray-700 mb-4 text-xs line-clamp-3">
              {product.description}
            </div>
            <div className="mt-auto">
              <button className="bg-slate-100 border border-transparent rounded-full py-2 px-4 text-black hover:bg-green-800 hover:text-white text-sm">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
