import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  imageClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    console.log('you clicked me');
    const clickedArr = [];
    let score = 0;

    clickedArr.push(this.state.id);
    console.log('clickedArr', clickedArr);

    for ( var i = 0 ; i < clickedArr.length ; i++)  {
      if ( clickedArr[i] === this.state.id ) {
        score = score - 1;
      } else {
        score = score + 1;
      }
    }
    // friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Dog List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            onClick={this.imageClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
