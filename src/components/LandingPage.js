import React from 'react';
import './LandingPage.css';
import backgroundImage from '../assets/landing-bg.jpg'; // Ensure this path is correct

const LandingPage = () => {
  console.log("LandingPage component rendered");

  return (
    <div className="landing-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Welcome to Paradise Nursery, where green meets serenity. Our nursery is your one-stop destination for an exquisite collection of houseplants, meticulously curated to transform your living spaces into lush, vibrant sanctuaries of tranquility and beauty.</p>
        <button onClick={() => window.location.href = '/products'}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
