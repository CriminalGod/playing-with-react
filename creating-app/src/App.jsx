import PropTypes from "prop-types";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.pikbest.com/png-images/neon-logo-chinese-food-template_2450831.png!sw800"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {resName, cuisine} = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#e6e6e6" }}>
      <img
        className="res-logo"
        src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1707211968/4be809a2e81c2e13d20167e5cdc1fedb.jpg"
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.3 stars</h4>
      <h4>20 minutes</h4>
    </div>
  );
};

RestaurantCard.propTypes = {
  resName: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Ruchi Dhaba"
          cuisine="Biryani, Fried Rice, Machuria"
        />
        <RestaurantCard resName="KFC" cuisine="French Fries, Chicken Nuggets" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;

/**
 * AppLayout ->>
 *
 * Header
 * - Logo
 * - Nav Items
 * - Logout
 * Body
 * - Search
 * - ReastaurantContainer
 *   -RestaurantCard
 *    - Img
 *    - Name of Res, Star rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Addresses
 * - Contact
 *
 */
