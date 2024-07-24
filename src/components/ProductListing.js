import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductListing.css';
import Header from './Header';
import productsData from '../data/products';
import { addToCart, removeFromCart } from '../redux/actions';

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const isInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  return (
    <div>
      <Header />
      <div className="product-listing">
        {productsData.map((category) => (
          <div key={category.name} className="category">
            <h2>{category.name}</h2>
            <div className="products">
              {category.products.map((product) => (
                <div key={product.id} className="product">
                  {product.sale && <div className="sale">SALE</div>}
                  <img src={product.thumbnail} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <p>{product.description}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
