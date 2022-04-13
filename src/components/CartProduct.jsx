import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeProduct } from '../redux/cartSlice';

const CartProduct = ({ product }) => {

    const { name, image, price, desc, quantity, id } = product;
    const dispatch = useDispatch();

    return (
        <div className="cartProductContainer">

            <div className="productImgContainer">
                <img src={image} alt={name} />
            </div>

            <div className="productInfoContainer">
                <h2>{name}</h2>
                <span>{desc}</span>
                <span className='price'>${(price * quantity).toFixed(2)}</span>
                <div className="btnsContainer">
                    <div className='quantity'>
                        <button className='qtyBtns' onClick={() => dispatch(decrease({productid: id, product}))}>-</button>
                        <span className='qty'>{quantity}</span>
                        <button className='qtyBtns' onClick={() => dispatch(increase({productid: id, product}))}>+</button>
                    </div>

                    <button className="btn removeBtn" onClick={() => dispatch(removeProduct({productid: id}))} >Remove Item</button>
                </div>

            </div>
        </div>
    )
}

export default CartProduct