import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartProduct from '../components/CartProduct';
import { clearCart, getTotalPrice } from '../redux/cartSlice';

const Cart = () => {

  const products = useSelector(state => state.cart.products)
  const quantity = useSelector(state => state.cart.quantity)
  const totalPrice = useSelector(getTotalPrice);

  const dispatch = useDispatch();


  return (
    <div className='cartContainer'>

      <div className="left">
        <h1 className='myCart'>My Cart</h1>
        {products.map(product => (
          <CartProduct product={product} key={product.id} />
        ))}
      </div>

      <div className="right">
        <h1 className='cartTotalTitle'>Cart Total</h1>
        <div className="infoContainer">
          <span className='total'>Total Items: {quantity}</span>
          <span className='total'>Total Price: ${totalPrice.toFixed(2)}</span>
          <div className="btnsContainer">
            <button className="btn btn1">CHECKOUT</button>
            <button className="btn" onClick={() => dispatch(clearCart()) } >Clear Cart</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart