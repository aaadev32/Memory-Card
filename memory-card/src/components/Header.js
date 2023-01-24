import React, { useState, useEffect } from "react";

const Header = () => {

    return (
        <div id="header">
            <div id="header-info">
                <h1 id="header-title">Animal Memory Card Game</h1>
                <p id="header-instructions">test your working memory in this memory card game, each time you choose a card the catalogue will be scrambled. try to get 12 unique selections to win the game!</p>
            </div>
            <div id="header-score">
                <div id="score">Score: 0</div>
                <div id="best-score">High Score: 0</div>
            </div>
        </div>
    );
}

export default Header