import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";



const Header = (exportedScore, exportedBestScore) => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);


    return (
        <div id="header">
            <div id="header-info">
                <h1 id="header-title">Animal Memory Card Game</h1>
                <p id="header-instructions">test your working memory in this memory card game, each time you choose a card the catalogue will be scrambled. try to get 10 unique selections to win the game!</p>
            </div>
            <div id="header-score">
                <div id="score">Score: { }</div>
                <div id="best-score">High Score: { }</div>
            </div>
        </div>
    );
}


export default Header