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
        const position = +event.target.closest(".Cell").getAttribute("order");

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

        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
            if (
                this.state.cells[a].cellcolor !== 0 &&
                this.state.cells[a].cellcolor === this.state.cells[b].cellcolor &&
                this.state.cells[b].cellcolor === this.state.cells[c].cellcolor
            ) {

             return this.state.cells[a].cellcolor === 1 ? 0 : 1;
            }
        }
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
            
        const win = this.checkForWinner();

        return (
            <div>
                <Start
                    StartStyles={(
                        this.state.players.every(player => player) &&
                        this.state.players.length === 2
                            ? "display_none"
                            : "Start_btn btn")}

                    handleStart={this.handleStart.bind(this)}
                />

                <div className={(
                    this.state.players.every(player => player) &&
                        this.state.players.length === 2
                        ? "display_block"
                        : "display_none")}>
                    <h1
                        className={(this.state.counter === 9)
                                    ? "Header Header--draw"
                                    : (win === 1)
                                    ? "Header bg_yellow"
                                    : (win === 0)
                                    ? "Header bg_red"
                                    :(this.state.counter % 2 === 0)
                                    ? "Header bg_red"
                                    : (this.state.counter % 2 !== 0)
                                    && "Header bg_yellow"}
                    >
                        {(this.state.counter === 9)
                            ? "Game over"
                            : (win === 1)
                            ? this.state.players[1]
                            : (win === 0)
                            ? this.state.players[0]
                            : (this.state.counter % 2 === 0)
                            ? this.state.players[0]
                            : (this.state.counter % 2 !== 0)
                            && this.state.players[1]
                            }
                    </h1>
                    
                    <button className="Back_btn btn" 
                            onClick={() => this.handleBack()}
                    >
                        back
                    </button>

                    <div className="Container">
                        {cells}
                        <div
                            className={
                                    (win === 0)
                                    ? "Winner Winner--won bg_red"
                                    : (win === 1)
                                    ? "Winner Winner--won bg_yellow"
                                    : (this.state.counter === 9)
                                    ? "Winner Winner--draw"
                                    : (this.state.reset)
                                    ? "display_none Winner"
                                    : (!this.state.reset)
                                    && "Winner"}
                                    
                        >
                            {
                                (win === 0 || win === 1)
                                ? `The ${this.state.players[win]} won the competition` 
                                : (this.state.counter === 9)
                                && "Draw"
                            }
                        </div>

                        <button
                            className="Reset_btn btn"
                            onClick={() => this.handleReset()}
                        >
                            {(this.state.counter === 9 || win === 0 || win === 1)
                                ? "revenge" 
                                : (!this.state.reset || this.state.reset)
                                && "reset"
                        }
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

