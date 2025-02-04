import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  componentWillUnmount() {
    console.log("Parent umMounted");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <div>This is about playing with React</div>
        <hr />
        <User name="Rakesh Kumar (Funtion)" />
        <hr />
        <UserClass name="Rakesh Kumar (Class)" />
        <hr />
        <UserClass name="CriminalGod (Class)" />
        <hr />
        <UserClass name="Turner (Class)" />
      </div>
    );
  }
}

export default About;
