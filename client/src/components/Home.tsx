import { useEffect, useState } from "react";
import axios from "axios";
import { type ProductDataProps } from "../types";
import Product from "./Product";
import "../styles/home.css";

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductDataProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((response) => {

        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="home">
      
        {products.map((product) => (
          <Product
           _id={product._id}
            key={product._id}
            name={product.name}
            normalPrice={product.normalPrice}
            discount={product.discount}
            specialPrice={product.specialPrice}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
