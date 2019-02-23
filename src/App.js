import React, { Component } from "react";
import Start from "./components/Start";
import Cell from "./components/Cell";
import BackBtn from "./components/BackBtn";
import ResetBtn from "./components/ResetBtn";
import data from "./data";
import classNames from "classnames";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cells: data,
            counter: 0,
            winner: false,
            gameOver: false,
            players: [],
            player1: [],
            player2: [],
        };

        this.handleClick = this.handleClick.bind(this);
    }


    isGameOver(counter) {

        return (counter === 9) ? true : false;
    }

    checkForWinner() {
        const combinations = [
            "012", "345", "678", "036", "147", "258", "048", "246"
        ];

        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
            if (
                this.state.cells[a].cellcolor !== 0 &&
                this.state.cells[a].cellcolor === this.state.cells[b].cellcolor &&
                this.state.cells[b].cellcolor === this.state.cells[c].cellcolor
            ) {
                return this.state.cells[a].cellcolor === 2 ? 2 : 1;
            }
        }
    }

    handleClick(position) {
        
            this.setState(prevState => {
                const player1 = [...prevState.player1];
                const player2 = [...prevState.player2];
                let {counter, winner, gameOver} = prevState;

                const updatedCells = prevState.cells.map(cell => {
                    if (cell.id === position && cell.cellcolor === 0) {

                        if (this.state.counter % 2 === 0) {
                            cell.cellcolor = 1;
                            player1.push(position);
                            counter += 1;
                        } else {
                            cell.cellcolor = 2;
                            player2.push(position);
                            counter += 1;
                        }
                        winner = this.checkForWinner();
                        gameOver = this.isGameOver(counter);
                        
                    }
                    return cell;
                });            
                
                
                if (this.state.counter % 2 === 0) {
                    return {
                        cells: updatedCells,
                        player1,
                        counter,
                        winner,
                        gameOver
                    };
                } else {
                    return {
                        cells: updatedCells,
                        player2,
                        counter,
                        winner,
                        gameOver
                    };
                }
                
            });
        
    }    

    handleReset = () => {

        this.setState(prevState => {
            let winner = prevState.winner;
            winner = 0;
            const updatedCells = prevState.cells.map(cell => {
                cell.cellcolor = 0;
                return cell;
            });

            return {
                cells: updatedCells,
                counter: 0,
                gameOver: false,
                winner
            };
        });

    }

    handleStart = () => {
        const player1 = prompt("Player #1 name");
        const player2 = prompt("Player #2 name");
        this.setState({ players: [player1, player2] });
    }

    handleBack = () => {

        this.setState(prevState => {
            const player1 = [...prevState.player1];
            const player2 = [...prevState.player2];
            let counter = prevState.counter;
            let countBack;
            let winner = prevState.winner;
            
            if (prevState.counter > 0) {
                winner = 0;
                if (prevState.counter % 2 === 0) {
                    countBack = player2.pop();
                    
                    const updatedCells = prevState.cells.map(cell => {
                        if (cell.id === countBack) {
                            cell.cellcolor = 0;
                        }
                        return cell;
                    });
                    
                    return {
                        cells: updatedCells,
                        counter: counter - 1,
                        player2,
                        gameOver: false,
                        winner
                    };
                } else {
                    countBack = player1.pop();

                    const updatedCells = prevState.cells.map(cell => {
                        if (cell.id === countBack) {

                            cell.cellcolor = 0;
                        }
                        return cell;
                    });
                    
                    return {
                        cells: updatedCells,
                        counter: counter - 1,
                        player1: player1,
                        gameOver: false,
                        winner
                    };
                }
            }            
            
        });
    }

    render() {
        
        const cells = this.state.cells.map((cell, index) => (
            <Cell
                key={cell.id}
                index={index}
                value={cell.cellcolor}
                handleClick={() => this.handleClick(cell.id)}
            />
        ));

        const headerClasses = classNames({
            "Header": true,
            "bg_red": this.state.counter % 2 === 0,
            "bg_green": this.state.counter % 2 !== 0,
            "color_red": this.state.winner === 1, 
            "color_green": this.state.winner === 2,            
            "bg_white": this.state.winner || this.state.gameOver,
        })
        
        const winnerClasses = classNames({
            "Winner": true,
            "Winner--won bg_green": this.state.winner === 2,
            "Winner--won bg_red": this.state.winner === 1,
            "Winner--draw": this.state.gameOver,
        });

        if (this.state.players.every(player => player) &&
            this.state.players.length === 2) {

            return (
                <div>
                    <div className={"display_block"}>
                        <h1 className={headerClasses}>
                            {(this.state.winner === 2)
                                ? `${this.state.players[1]} won`
                                : (this.state.winner === 1)
                                    ? `${this.state.players[0]} won`
                                    : (this.state.gameOver)
                                        ? "Game over"
                                        : (this.state.counter % 2 === 0)
                                            ? this.state.players[0]
                                            : this.state.players[1]
                            }
                        </h1>

                        <BackBtn handleBack={this.handleBack} />

                        <div className="Container">
                            {cells}
                            <div className={winnerClasses} >
                                {
                                    (this.state.winner)
                                        ? `The ${this.state.players[this.state.winner - 1]} won the competition`
                                        : (this.state.gameOver)
                                        && "Draw"
                                }
                            </div>

                            <ResetBtn handleReset={this.handleReset} />
                        </div>
                    </div>
                </div>
            )

        } else {
            
            return (
                <div>
                    <Start
                        StartStyles={"Start_btn btn"}
                        handleStart={this.handleStart}
                    />
                </div>
            )
        }                   
    }
}