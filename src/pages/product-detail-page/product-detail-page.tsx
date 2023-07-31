import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import { useParams } from "react-router-dom";
import { IProduct } from "../product-list-page/type";
import axios from "axios";

const ProductDetailPage = () => {
  const colors = ["red", "blue", "green", "yellow"];
  const { id } = useParams();

  const [data, setData] = useState<IProduct>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(data);

  useEffect(() => {
    // Fetching data from axios
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  function getBackgroundColor(color: string) {
    if (color === "red") {
      return "bg-red-600";
    }
    if (color === "blue") {
      return "bg-blue-600";
    }
    if (color === "green") {
      return "bg-green-600";
    }
    if (color === "yellow") {
      return "bg-yellow-600";
    }
  }

  return (
    <Container>
      <div className="flex items-center justify-center p-8">
        {/* Product Image */}
        <div className="w-1/2">
          <img src={data?.image} alt="Product" className="w-full rounded-lg " />
        </div>

        {/* Product Description and Add to Cart Button */}
        <div className="w-1/2 px-8">
          <h2 className="text-2xl font-bold mb-4">{data?.title}</h2>
          <p className="mb-6">{data?.description}</p>
          <p className="text-xl">$500</p>
          {/* color selection */}
          <div className="mb-4">
            <p className="text-gray-700">Select Color:</p>
            <div className="flex">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full mx-2 cursor-pointer ${getBackgroundColor(
                    color
                  )}`}></div>
              ))}
            </div>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 mt-3 rounded hover:bg-green-800">
            Add to Cart
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailPage;
