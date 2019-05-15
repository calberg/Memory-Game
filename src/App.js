import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import CardWrapper from "./components/CardWrapper";
import Navbar from "./components/Navbar";
import character from "./character.json";
import './App.css';

class App extends Component {
  // Setting this.state.character to the character json array
  state = {
    character,
    score: 0,
    highscore: 0

  };

  //calculate highscore -- need to test this 
  highscore = () => {
    if (this.state.score > this.state.highscore){
      this.setState({highscore:this.state.score}, function() {
        console.log(this.state.highscore);
      })
    }
  }

  //TODO: if score is x, you win yay!
  gameover = () => {
    this.state.character.forEach(function(characters) {
      characters.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
  }

  clickCount = id => {
    this.state.character.find(characters => {
      if (characters.id === id) {
        if(characters.count === 0){
          characters.count = characters.count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.character.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.highscore();
          this.gameover();
        }
      }
      return false;
    });
  }

  // Map over this.state.character and render a charactersCard component for each characters object
  render () {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highscore={this.state.highscore}/>
        <header className="header">
          <h1>Memory Game!</h1>
          <h2>Click an image! Once you click the character, don't click them again!  </h2>
        </header>
        <CardWrapper>
        {this.state.character.map(characters => (
          <CharacterCard
            // removecharacters={this.removecharacters}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
            count={characters.count}
            clickCount={this.clickCount}
          />
        ))}
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default App;
