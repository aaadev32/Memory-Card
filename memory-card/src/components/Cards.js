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
        <div id="cards">
            <img className="card-elements" src={Capybara}></img>
            <img className="card-elements" src={Cat}></img>
            <img className="card-elements" src={Dolphin}></img>
            <img className="card-elements" src={Eagle}></img>
            <img className="card-elements" src={Elephant}></img>
            <img className="card-elements" src={Elk}></img>
            <img className="card-elements" src={Owl}></img>
            <img className="card-elements" src={Racoon}></img>
            <img className="card-elements" src={Turtle}></img>
            <img className="card-elements" src={Monkey}></img>
            <img className="card-elements" src={Toucan}></img>
            <img className="card-elements" src={Wolf}></img>
        </div>
    );
}

export default Cards