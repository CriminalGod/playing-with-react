import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState(false);
  console.log("Header rendered...");

  useEffect(() => {
    console.log("useEffect called in Header Component...");
  }, [btnName]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img
          className="logo"
          src="https://img.pikbest.com/png-images/neon-logo-chinese-food-template_2450831.png!sw800"
          alt="logo"
        />
      </Link>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
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
