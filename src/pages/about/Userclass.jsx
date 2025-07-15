import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "temp",
      location: "",
      avatar: "",
      bio: "",
      username: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/lakshay-agarwal1");
    const json = await data.json();

    this.setState({
      name: json.name,
      location: json.location,
      avatar: json.avatar_url,
      bio: json.bio,
      username: json.login,
    });
  }
  render() {
    const { name, location, avatar, bio, username } = this.state;

    return (
      <div>
        <img src={avatar} alt="" />
        <h2>Name : {name}</h2>
        <h4>username : @{username}</h4>
        <h4>Location: {location}</h4>
        <p>{bio}</p>
      </div>
    );
  }
}
export default Userclass;
