import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-card'>
      <div className='food-image-container'>
        <img src={image} alt={name} className='food-img' />
        <div className='food-overlay'>
          <div className='food-overlay-top'>
            <h3>{name}</h3>
            <p className='food-price'>₹{price}</p>
          </div>
          <div className='food-overlay-bottom'>
            <img src={assets.rating_starts} alt="rating" />
            <div className='food-action'>
              {cartItems[id] > 0 ? (
                <div className="food-counter">
                  <button onClick={() => removeFromCart(id)}>−</button>
                  <span>{cartItems[id]}</span>
                  <button onClick={() => addToCart(id)}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart(id)}>+ Add</button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Food Description below image */}
      <p className='food-description'>{description}</p>
    </div>
  );
};

export default FoodItem;
