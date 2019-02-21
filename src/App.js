import React, { Component } from "react";
import Start from "./Start";
import Cell from "./Cell";
import data from "./data";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cells: data,
            counter: 0,
            reset: false,             
            players: [],
            player1: [],
            player2: [],
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const position = +event.target.closest(".cell").getAttribute("order");
      console.log(54);
        this.setState(prevState => {
            const updatedCells = prevState.cells.map(cell => {
                if (cell.id === position && cell.cellcolor === 0) {
                    if (this.state.counter % 2 === 0) {
                        cell.cellcolor = 1;
                        prevState.player1.push(position);
                    } else if (this.state.counter % 2 !== 0) {
                        cell.cellcolor = 2;
                        prevState.player2.push(position);
                    }
                    prevState.counter++;
                }
                return cell;
            });

            return {
                cells: updatedCells
            };
        });
    }

    handleReset() {
        this.setState(prevState => {
            prevState.counter = 0;

            const updatedCells = prevState.cells.map(cell => {
                cell.cellcolor = 0;
                return cell;
            });

            return {
                cells: updatedCells
            };
        });

        this.setState({reset: !this.state.reset})
        
    }

    handleStart() {
        const player1 = prompt("Player #1 name");
        const player2 = prompt("Player #2 name");
        this.setState({ players: [player1, player2] });
    }

    handleBack() {
        this.setState(prevState => {
            let countBack;

            if (prevState.counter > 0) {
                if (prevState.counter % 2 === 0) {
                    countBack = prevState.player2.pop();
                    prevState.counter--;
                    prevState.cells[countBack].cellcolor = 0;
                } else if (prevState.counter % 2 !== 0) {
                    countBack = prevState.player1.pop();
                    prevState.counter--;
                    prevState.cells[countBack].cellcolor = 0;
                }
            }

            return prevState;
        });
    }

    checkForWinner() {
   
    }

    render() {
        
        const cells = this.state.cells.map((cell, index) => (
            <Cell
                key={cell.id}
                index={index}
                value={cell.cellcolor}
                handleClick={this.handleClick}
            />
        ));

        

        const styles = {};
        const startStyles = {};
        const winnertStyles = {};
        let resetText = "reset";
        const headerStyles = {}; 

        if (
            this.state.players.every(player => player) &&
            this.state.players.length === 2
        ) {
            styles.display = "block";
            startStyles.display = "none";
        } else {
            styles.display = "none";
            startStyles.display = "block";
        }

        if (this.state.reset) {
            winnertStyles.display = "none";
            resetText = "reset";
        }

        if (this.state.counter % 2 === 0) {
            headerStyles.backgroundColor = 'rgb(173, 74, 74)';
            headerStyles.text = this.state.players[0]
        } else if (this.state.counter % 2 !== 0) {
            headerStyles.backgroundColor = 'rgb(233, 247, 30)';
            headerStyles.text = this.state.players[1]
        }

        const combinations = [
            "012",
            "345",
            "678",
            "036",
            "147",
            "258",
            "048",
            "246"
        ];

        if (this.state.counter === 9) {
          winnertStyles.text = "you played a draw";
          winnertStyles.display = "inline-block";
          winnertStyles.backgroundColor = "#000";
          winnertStyles.color = "#fff";
          resetText = "revenge";

          headerStyles.backgroundColor = '#000';
          headerStyles.text = "Game over";
          headerStyles.backgroundColor = "#000";
          headerStyles.color = "#ffff";
        }    

        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
            if (
                this.state.cells[a].cellcolor !== 0 &&
                this.state.cells[a].cellcolor === this.state.cells[b].cellcolor &&
                this.state.cells[b].cellcolor === this.state.cells[c].cellcolor
            ) {
                
                winnertStyles.text = `The ${
                    this.state.players[this.state.cells[a].cellcolor === 1 ? 0 : 1]
                    } won the competition`;
                winnertStyles.display = "inline-block";
                winnertStyles.color = "#fff";
                resetText = "revenge";
                winnertStyles.backgroundColor =
                    this.state.counter % 2 === 0 ? "#ff0" : "#f00";
                winnertStyles.winner = true;

                headerStyles.text = this.state.players[this.state.cells[a].cellcolor === 1 ? 0 : 1];
                headerStyles.backgroundColor = (this.state.cells[a].cellcolor)
                    ? 'rgb(173, 74, 74)'
                    : 'rgb(233, 247, 30)';

            }
            
        }

        return (
            <div>
                <Start
                    startstyle={startStyles}
                    handleStart={this.handleStart.bind(this)}
                />

                <div style={styles}>
                    <h1
                        style={headerStyles}
                        className="App_header"
                    >
                        {headerStyles.text}
                    </h1>
                    <button className="Back_btn btn" onClick={() => this.handleBack()}>
                        back
                    </button>

                    <div className="container">
                        {cells}
                        <div
                            style={winnertStyles}
                            className="winner"
                        >
                            {winnertStyles.text}
                        </div>

                        <button
                            className="Reset_btn btn"
                            onClick={() => this.handleReset()}
                        >
                            {resetText}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
// console.log(Math.round(Math.random(0, 8) * 10));
