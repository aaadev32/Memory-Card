import React, { useState } from "react";
import Capybara from '../media/capybara.jpg'
import Cat from '../media/cat.jpg'
import Dolphin from '../media/dolphin.jpg'
import Eagle from '../media/eagle.jpg'
import Elephant from '../media/elephant.jpg'
import Elk from '../media/elk.jpg'
import Owl from '../media/great-horned-owl.jpg'
import Racoon from '../media/racoon.jpg'
import Turtle from '../media/leatherback-seaturtle.jpg'
import Monkey from '../media/monkey.jpeg'
import Toucan from '../media/toucan.jpg'
import Wolf from '../media/wolf.jpg'



function Cards() {

    return (
        <div className="cards">
            <img className="cards" src={Capybara}></img>
            <img className="cards" src={Cat}></img>
            <img className="cards" src={Dolphin}></img>
            <img className="cards" src={Eagle}></img>
            <img className="cards" src={Elephant}></img>
            <img className="cards" src={Elk}></img>
            <img className="cards" src={Owl}></img>
            <img className="cards" src={Racoon}></img>
            <img className="cards" src={Turtle}></img>
            <img className="cards" src={Monkey}></img>
            <img className="cards" src={Toucan}></img>
            <img className="cards" src={Wolf}></img>
        </div>
    );
}

export default Cards