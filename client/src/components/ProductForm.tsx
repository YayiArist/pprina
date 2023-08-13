import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { ProductProps } from '../types';
import '../styles/productForm.css';

const initialProductState: ProductProps = {
  name: '',
  normalPrice: 0,
  discount: 0,
  specialPrice: 0,
  image: '',
};

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState<ProductProps>(initialProductState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3000/product`, product);

      if (response.status === 201) {
        console.log('Producto enviado exitosamente');
        setProduct(initialProductState); 
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };

  return (
    <div className='form-container'>
      <h2>Ingresa un Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Nombre del Producto: </label>
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </div>
        <div className='form-field'>
          <label>Precio Normal: </label>
          <input type="number" name="normalPrice" value={product.normalPrice} onChange={handleChange} />
        </div>
        <div className='form-field'>
          <label>Porcentaje de Descuento: </label>
          <input type="number" name="discount" value={product.discount} onChange={handleChange} />
        </div>
        <div className='form-field'>
          <label>Precio Especial:  </label>
          <input type="number" name="specialPrice" value={product.specialPrice} onChange={handleChange} />
        </div>
        <div className='form-field'>
          <label>Image URL:</label>
          <input type="text" name="image" value={product.image} onChange={handleChange} />
        </div>
        <button type="submit">Guardar Producto</button>
      </form>
    </div>
  );
};

export default ProductForm;