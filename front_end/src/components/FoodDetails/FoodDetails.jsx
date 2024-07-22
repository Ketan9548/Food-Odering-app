import React, { useContext } from 'react';
// import './Fooditem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodDetails = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url, token } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={`${url}/images/${image}`} alt="" className="food-item-image" />
        {token ? (
          !cartItems[id] ? (
            <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          ) : (
            <div className="food-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
          )
        ) : null}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">&#8377; {price}</p>
      </div>
    </div>
  );
};

export default FoodDetails;
