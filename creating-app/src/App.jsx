import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
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
