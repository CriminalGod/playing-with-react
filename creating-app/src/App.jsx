import Body from "./components/Body";
import Header from "./components/Header";

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
