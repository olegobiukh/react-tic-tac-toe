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
            winner: null,
            gameOver: false,
            players: [],
            turns: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    isGameOver(counter) {

        return counter === 9;
    }

    checkForWinner(turns) {
        const combinations = [
            "012", "345", "678", "036", "147", "258", "048", "246"
        ];

        const turn1 = turns.filter((item, i) => i % 2 === 0);
        const turn2 = turns.filter((item, i) => i % 2 === 1);

        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];

            if (turn1.includes(+a) && turn1.includes(+b) && turn1.includes(+c)) {
                return 0;
            } else if (turn2.includes(+a) && turn2.includes(+b) && turn2.includes(+c)) {
                return 1;
            }
        }
        return null;
    }

    handleClick(position) {
        const turns = [...this.state.turns];
        let { counter, winner, gameOver } = this.state;
        const updatedCells = [...this.state.cells];
        const toggle = this.state.counter % 2;

        if (this.state.cells[position].cellcolor === 0) {
            updatedCells[position] = {
                ...updatedCells[position],
                cellcolor: toggle ? 2 : 1,
            }

            if (toggle) {
                turns.push(position);
                counter += 1;
            } else {
                turns.push(position);
                counter += 1;
            }
        }

        winner = this.checkForWinner(turns);
        gameOver = this.isGameOver(counter);           

        this.setState({
            cells: updatedCells,
            turns,
            counter,
            winner,
            gameOver
        })        
    }    

    handleReset = () => {

        this.setState(prevState => {
            const updatedCells = prevState.cells.map(cell => {
                cell.cellcolor = 0;
                return cell;
            });

            return {
                cells: updatedCells,
                counter: 0,
                gameOver: false,
                turns: [],
                winner: null
            };
        });
    }

    handleStart = () => {
        const player1 = prompt("Player #1 name");
        const player2 = prompt("Player #2 name");
        this.setState({ players: [player1, player2] });
    }

    handleBack = () => {
        const cells = [...this.state.cells];
        const turns = [...this.state.turns];
        let counter = this.state.counter;

        if (turns.length > 0) {
            const i = turns.pop();
            counter--;
          
            cells[i] = {
                ...cells[i],
                cellcolor: 0,
            }
        }
                
        this.setState(
            {
                cells,
                counter,
                turns,
                gameOver: false,
                winner: null,
            }
        );        
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

        const { winner, gameOver, counter, players } = this.state;
        const currentPlayer = counter % 2 ? 1 : 0;

        const headerClasses = classNames({
            "Header": true,
            "bg_red": counter % 2 === 0,
            "bg_green": counter % 2 !== 0,
            "color_red": winner === 0, 
            "color_green": winner === 1,            
            "bg_white": winner !== null || gameOver,
        })
        
        const winnerClasses = classNames({
            "Winner": true,
            "Winner--won bg_green": winner === 1,
            "Winner--won bg_red": winner === 0,
            "Winner--draw": gameOver,
        });

        if (players.every(player => player) &&
            players.length === 2) {

            return (
                <div>
                    <div className={"display_block"}>
                        {
                            winner !== null
                                ? <h1 className={headerClasses}>{players[winner]} won</h1>
                                : <h1 className={headerClasses}>{gameOver ? "game over" : players[currentPlayer]}</h1>
                        }
                                                
                        <BackBtn handleBack={this.handleBack} />

                        <div className="Container">
                            {cells}
                            <div className={winnerClasses} >
                                {
                                    winner !== null
                                        ? `The ${players[winner]} won the competition`
                                        : gameOver
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