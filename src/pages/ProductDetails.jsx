import React, { useState } from 'react';
import { data } from '../data';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addProduct} from "../redux/cartSlice"

const ProductDetails = () => {

    const { id } = useParams();
    const [pic, setPic] = useState(0);
    const [quantity, setQuantity] = useState(1)
    const product = data.find(p => p.id === Number(id));

    const decreaseQuantity = () => {
        if(quantity <= 1 ) return;
        setQuantity(quantity - 1 )
    }
    const increaseQuantity = () => {
        setQuantity(quantity + 1 )
    }

    const dispatch = useDispatch();

    return (
        <div className='productDetailsContainer'>
            <div className="left">
                <div className="imgContainer">
                    <img src={product.pics[pic]} alt={product.name} className="picture" />
                </div>
                <div className="imgsCWrapper">
                    <div onClick={() => setPic(0)} className="picContainer">
                        <img src={product.pics[0]} alt={product.name} className="picture" />
                    </div>
                    <div onClick={() => setPic(1)} className="picContainer">
                        <img src={product.pics[1]} alt={product.name} className="picture" />
                    </div>
                    <div onClick={() => setPic(2)} className="picContainer">
                        <img src={product.pics[2]} alt={product.name} className="picture" />
                    </div>
                    <div onClick={() => setPic(3)} className="picContainer">
                        <img src={product.pics[3]} alt={product.name} className="picture" />
                    </div>
                </div>

            </div>

            <div className="right">
                <h1 className='title'>{product.name}</h1>
                <span className='desc'>{product.desc}</span>
                <span className='price'>${(product.price * quantity).toFixed(2)}</span>
                <div className='buttonsContainer'>
                    <button className='btn' onClick={() => dispatch(addProduct({product, quantity}))} >Add to Cart</button>
                    <div className='quantity'>
                        <button className='qtyBtns' onClick={decreaseQuantity}>-</button>
                        <span className='qty'>{quantity}</span>
                        <button className='qtyBtns' onClick={increaseQuantity} >+</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails
