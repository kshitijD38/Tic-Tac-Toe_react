// import logo from './logo.svg';
import React from "react";
// import { Component } from 'react';
import './App.css';
// import GridItem from "./components/GridItem";
import GridRow from './components/GridRow';
import Header from './components/Header';
import Footer from './components/Footer';
import FooterButton from './components/FooterButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      playerTurn: "X",
      gameActive: true,
      count: 0
    }
  }
  IsPlayerWon() {
    const { gameState, playerTurn, } = this.state;
    if (gameState[0][0] === playerTurn) {
      if (gameState[0][1] === playerTurn && gameState[0][2] === playerTurn) {
        return true;
      }
      if (gameState[1][0] === playerTurn && gameState[2][0] === playerTurn) {
        return true;
      }
      if (gameState[1][1] === playerTurn && gameState[2][2] === playerTurn) {
        return true;
      }
    } else if (gameState[2][2] === playerTurn) {
      if (gameState[1][2] === playerTurn && gameState[0][2] === playerTurn) {
        return true;
      }
      if (gameState[2][1] === playerTurn && gameState[2][0] === playerTurn) {
        return true;
      }
    }
    if (gameState[1][1] === playerTurn) {
      if (gameState[0][1] === playerTurn && gameState[2][1] === playerTurn) {
        return true;
      }
      if (gameState[1][0] === playerTurn && gameState[1][2] === playerTurn) {
        return true;
      }
      if (gameState[0][2] === playerTurn && gameState[2][0] === playerTurn) {
        return true;
      }
    }
    return false;
  }

  handlePlayerClick = (rowIndex, colIndex) => {
    console.log(rowIndex+", "+ colIndex)
    if(this.state.gameState[rowIndex][colIndex] === "" && this.state.gameActive){
      this.setState({count : this.state.count + 1});
      const copiedGameState = [...this.state.gameState];
      copiedGameState[rowIndex][colIndex] = this.state.playerTurn;
      this.setState({gameState : copiedGameState});
      if(this.IsPlayerWon()){
        this.state.gameActive = false;
        this.setState({playerTurn : this.state.playerTurn === "X" ? "Congratulations PlayerX Wins!" : "Congratulations PlayerO Wins!"})
      }
      if(this.state.count === 8 && this.state.gameActive === true){
        this.state.gameActive = false;
        this.setState({playerTurn : "Game Draw!"})
      }
      this.state.playerTurn = this.state.playerTurn === "X" ? "O" : "X";
    }
  }

  reload = () => {
    window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <div id="board">
          {this.state.gameState.map((row, rowIndex) => (
            <GridRow row={row} rowIndex={rowIndex} handlePlayerClick = {this.handlePlayerClick} />
          ))}
        </div>
        <Footer turn={this.state.playerTurn}/>
        <FooterButton reload = {this.reload}/>
      </div>
    );
  }
}



export default App;
