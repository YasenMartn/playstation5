import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';

const Product = ({product}) => {

  const dispatch = useDispatch();

  const {name, price, image, id} = product;

  return (
    <div className='productContainer' >
      <div className="imageContainer">
        <Link to={`/products/${id}`} className="imageLink">
          <img className='image' src={image} alt={name} />
        </Link>
      </div>
      <div className="infoContainer">
        <span className="name">{name}</span>
        <span className='price'>${price}</span>
        <button className='btn' onClick={() => dispatch(addProduct({product, quantity: 1}))} >Add to Cart</button>
      </div>
    </div>
  ) 
}

export default Product