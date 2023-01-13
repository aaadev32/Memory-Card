import React, { useState, useEffect } from "react";
import Cards from '../components/Cards.js'
const Header = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    //this might be unnecessary
    useEffect(() => {

        return () => {

        };

    }, []);

    return (
        <div id="header">
            <div id="header-info">
                <h1 id="header-title">Animal Memory Card Game</h1>
                <p id="header-instructions">test your working memory in this memory card game, each time you choose a card the catalogue will be scrambled. try to get 10 unique selections to win the game!</p>
            </div>
            <div id="header-score">
                <div>Score:{score}</div>
                <div>Best Score:{bestScore}</div>
            </div>
        </div>
    );
}


export default Header