import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-overlay"></div>
      <div className="header-contents">
        <h2>Experience the taste you love — order your favorite dishes now!</h2>
        <p>From traditional Indian delicacies to popular street foods, GoAnnapurna offers a diverse menu, seamless browsing, and quick delivery — ensuring a delicious experience every time you order.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
