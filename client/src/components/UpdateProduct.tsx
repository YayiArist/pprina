import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductDataProps } from '../types';
import '../styles/updateForm.css';

const UpdateProduct: React.FC<ProductDataProps> = () => {
  const { _id } = useParams<{ _id: string }>();

  const [newNormalPrice, setNewNormalPrice] = useState<number | undefined>(undefined);
  const [newDiscount, setNewDiscount] = useState<number | undefined>(undefined);
  const [newSpecialPrice, setNewSpecialPrice] = useState<number | undefined>(undefined);

  const handleUpdateClick = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/product/update-product/${_id}`, {
        newNormalPrice,
        newDiscount,
        newSpecialPrice,
      });

      console.log('Precios actualizados:', response.data);

    
      setNewNormalPrice(undefined);
      setNewDiscount(undefined);
      setNewSpecialPrice(undefined);

    
      alert('Producto actualizado');

    } catch (error) {
      console.error('Error al actualizar precios:', error);
    }
  };

  return (
    <div className="form-update-container">
      <h3>Actualizar Precios</h3>
      <div>
        <label className="update-label">
          Nuevo Precio Normal:{' '}
          <input
            type="number"
            value={newNormalPrice || ''}
            onChange={(e) => setNewNormalPrice(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label className="update-label">
          Nuevo Descuento:{' '}
          <input
            type="number"
            value={newDiscount || ''}
            onChange={(e) => setNewDiscount(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label className="update-label">
          Nuevo Precio Especial:{' '}
          <input
            type="number"
            value={newSpecialPrice || ''}
            onChange={(e) => setNewSpecialPrice(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button className="update" onClick={handleUpdateClick}>
        Actualizar Precios
      </button>
    </div>
  );
};

export default UpdateProduct;