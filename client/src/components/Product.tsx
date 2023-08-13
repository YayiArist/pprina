import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { ProductDataProps } from "../types";
import "../styles/product.css";
import { useNavigate } from "react-router-dom";

const Product: React.FC<ProductDataProps> = ({
  name,
  normalPrice,
  discount,
  specialPrice,
  image,
  _id,
}) => {
  const { isAuthenticated, user } = useAuth0();
  const [showUpdateButton, setShowUpdateButton] = useState(true);

  useEffect(() => {
    if (isAuthenticated && user && user.email) {
      setShowUpdateButton(true);
      axios
        .get(`http://localhost:3000/user/${user.email}`)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    } else {
      setShowUpdateButton(false);
    }
  }, [isAuthenticated, user]);

  let data = { email: "", id: "" };

  if (user && user.email) {
    data = {
      email: user.email,
      id: _id,
    };
  }

  const handleBuyClick = async () => {
    if (isAuthenticated && user && user.email) {
      try {
        const response = await axios.post(
          `http://localhost:3000/user/purchase/${data.email}/${data.id}`
        );
        console.log("compra realizada:", response);
        alert("Compra realizada");
      } catch (error) {
        console.error("Error al realizar la compra:", error);
      }
    } else {
      alert("Por favor regístrese para realizar su compra");
    }
  };

  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/update/${_id}`);
  };
  
  return (
    <div className="product">
      <div className="image-container">
        <img className="image" src={image} alt={name} />
      </div>
      <div className="product-details">
        <div className="title">
          <h3>{name}</h3>
        </div>

        <div className="price">
          <div className="price-item">
            <p className="price-title">Precio normal:</p>
            <p className="price-value strike">
              ${normalPrice.toLocaleString()}
            </p>
          </div>
          <div className="price-item">
            <p className="price-title">Precio con descuento:</p>
            <p className="price-value green-text">
              ${discount.toLocaleString()}
            </p>
          </div>
          <div className="price-item special-price">
            <p className="price-title">Precio especial:</p>
            <p className="price-value">${specialPrice.toLocaleString()}</p>
            <p className="small-text">
              <strong>*Solo con tu primera compra</strong>
            </p>
          </div>
        </div>
      </div>
      <button className="buy-button" onClick={handleBuyClick}>
        Comprar
      </button>
      {showUpdateButton && (
        <button className="update-button" onClick={handleUpdateClick}>Actualizar precio</button>
      )}
    </div>
  );
};

export default Product;
