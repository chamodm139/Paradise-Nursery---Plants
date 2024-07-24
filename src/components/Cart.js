import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/actions';
import Header from './Header';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleIncrement = (product) => {
    dispatch(incrementQuantity(product));
  };

  const handleDecrement = (product) => {
    dispatch(decrementQuantity(product));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <div className="cart">
        <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.thumbnail} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => handleDecrement(product)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleIncrement(product)}>+</button>
                  </div>
                  <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
                  <button onClick={() => handleRemoveFromCart(product)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cart-actions">
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
