import { Component } from "react";
import PropTypes from "prop-types";

class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log(props.name + " constructor");

    // this.timer = setInterval(() => {
    //     console.log("timer");
    // }, 1000)

    this.state = {
      count: 0,
      count1: 1,
      userInfo: {
        location: "Mogalthur",
      },
    };
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }

  //   API CALL
  //   async componentDidMount() {
  //     const data = await fetch("https://api.github.com/users/CriminalGod");
  //     const json = await data.json();
  //     this.setState({
  //       userInfo: json,
  //     });
  //     console.log(json);
  //   }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log(this.props.name + " componentWillUnmount");
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
        <h2>{this.state.userInfo.location}</h2>
        <p>This is a Class component</p>
      </div>
    );
  }
}

UserClass.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserClass;
