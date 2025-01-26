import { useState } from "react";
import PropTypes from "prop-types";

const User = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  const [count1] = useState(1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Count1: {count1}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h1>{name}</h1>
      <p>This is a Functional Component</p>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
