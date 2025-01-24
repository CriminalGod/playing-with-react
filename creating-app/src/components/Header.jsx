import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState(false);
  console.log("Header rendered..");
  
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
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(!btnName);
            }}
          >
            {btnName === false ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
