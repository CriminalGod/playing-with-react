import { Component } from "react";
import PropTypes from "prop-types";

class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log(props.name + " constructor");
    
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
    
  }

  render() {
    console.log(this.props.name + " render");
    
    const { name } = this.props;
    const { count, count1 } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <h1>Count1: {count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h1>{name}</h1>
        <p>This is a Class component</p>
      </div>
    );
  }
}

UserClass.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserClass;
