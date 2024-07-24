import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import cart from '../assets/cart.png';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="header">
        <div className="logo-section" onClick={() => window.location.href = '/'}>
        <img src="/logo192.png" alt="Logo" className="logo" />
        <div>
          <h1>Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
        </div>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <div className="cart">
          <Link to="/cart">
            <img src={cart} alt="Shopping Cart" />
            <span>{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
