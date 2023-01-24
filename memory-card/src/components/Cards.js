import React, { useEffect, useState } from "react";
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

//the below 2 lines are declared globally since i do not want them being reset every time the cards function is rerun, i need the userChoiceKeys and isUnique to only be reset when the game is won or lost
//i didnt feel it neccessary to use states as they arent used to display any information to the DOM
let userChoiceKeys = [];
let isUnique = true;
//saved score is used to display the score state for the losing game alert function because every time the score state is set back to 0 for the end of the game useEffect will update score and rerender the DOM displaying 0
//i dont need to do this for bestScore since its value does not have to be reset to 0 after the game ends
let savedScore = null;

function Cards() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);


    //will contain the data-key values of each card element chosen by the user to identify if they have chosen a unique card or not and updating the score and best score in Header.js accordingly

    function randomNumberArray() {
        let randomNumberArr = [];
        randomNumberArr.push(Math.floor(Math.random() * 12));

        while (randomNumberArr.length < 12) {
            let newInt = Math.floor(Math.random() * 12);

            //this loop is used to make sure all integers pushed to randomNumberArr are unique as it gets populated
            for (let i = 0; i < randomNumberArr.length; i++) {
                if (newInt == randomNumberArr[i]) {
                    break
                }
                if (i == randomNumberArr.length - 1) {
                    randomNumberArr.push(newInt);

                }
            }
        }
        return randomNumberArr;
    };

    function removeChildren(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }


    //returns a boolean value after checking the data-key attribute of the players selected card and sends an update of the score/best score to the associated nodes in the header.js file
    const scoring = (e) => {

        isUnique = true;
        const userChoice = e.currentTarget.dataset.key;
        if (userChoiceKeys[0] != null) {
            //compare every index value in userChoiceKeys state array to the current userChoice, if it is unique increment the score state, if it is not clear the array, set score to 0 and update best score if needed

            userChoiceKeys.forEach(index => {

                console.log(index)
                //player loss condition
                if (userChoice == index) {
                    if (score > bestScore) {
                        setBestScore(score);;
                    }
                    savedScore = score;
                    isUnique = false;
                    setScore(0);
                }
            });
        }
        //its neccessary to use a bool to check if the forEach method found a matching index to the user choice as the return statement in the method is only enough to exit the loop but not the scoring function
        if (isUnique == true) {
            console.log('test');
            userChoiceKeys.push(userChoice);

            //executes if player selected unique card
            setScore(score + 1);
        }
        console.log('scores', score, bestScore, userChoiceKeys)

    }

    //copies the class elements of card-elements then removes them from the DOM, calls randomNumberArray to get a randomized array of numbers 0-11, the random array then iterated to call the data-key attributes of the class elements and repopulate the DOM
    const randomizeImages = () => {
        const cardElements = document.querySelectorAll(".card-elements");
        removeChildren(document.getElementById('cards'));
        const randomArray = randomNumberArray();
        let iteration = 0;

        cardElements.forEach(element => {
            // the randomArray is accessed consecutively each iteration for the random integers generated from randomNumberArray function
            let randomIndex = randomArray[iteration];
            //the node list cardElements has an index accessed through the randomIndex value and has the result appended back to the DOM which ideally randomizes the original node list
            console.log(cardElements[randomIndex])
            document.getElementById('cards').appendChild(cardElements[randomIndex]);
            iteration++;
        });
    };

    useEffect(() => {

        //setting score in this block because useEffect will ignore similar checks anywhere else in the entire function, this causes another unneccessary rerender but in a small application such as it shouldnt matter.
        if (score == 12) {
            userChoiceKeys = [];
            alert('Good Job You Won!');
            setScore(0);
            setBestScore(12);
            console.log(`setting score in useEffect ${score}`)
            document.getElementById('score').textContent = `Score: ${score}`;
            document.getElementById('best-score').textContent = `High Score: ${bestScore} `;
        }

        if (isUnique == false) {
            userChoiceKeys = [];
            alert(`You Lost! Score:${savedScore}, High Score: ${bestScore}`);
            savedScore = null;
        }

        document.getElementById('score').textContent = `Score: ${score}`;
        document.getElementById('best-score').textContent = `High Score: ${bestScore} `;

    }, [score, bestScore])
    return (
        <div id="cards">
            <div className="card-elements" id="capybara" data-key={0} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Capybara}></img>
                <p>Capybara</p>
            </div>
            <div className="card-elements" id="cat" data-key={1} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Cat}></img>
                <p>Cat</p>
            </div>
            <div className="card-elements" id="dolphin" data-key={2} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Dolphin}></img>
                <p>Dolphin</p>
            </div>
            <div className="card-elements" id="eagle" data-key={3} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Eagle}></img>
                <p>Eagle</p>
            </div>
            <div className="card-elements" id="elephant" data-key={4} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Elephant}></img>
                <p>Elephant</p>
            </div>
            <div className="card-elements" id="elk" data-key={5} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Elk}></img>
                <p>Elk</p>
            </div>
            <div className="card-elements" id="owl" data-key={6} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Owl}></img>
                <p>Owl</p>

            </div>
            <div className="card-elements" id="racoon" data-key={7} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Racoon}></img>
                <p>Racoon</p>
            </div>
            <div className="card-elements" id="turtle" data-key={8} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Turtle}></img>
                <p>Turtle</p>
            </div>
            <div className="card-elements" id="monkey" data-key={9} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Monkey}></img>
                <p>Monkey</p>
            </div>
            <div className="card-elements" id="toucan" data-key={10} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Toucan}></img>
                <p>Toucan</p>
            </div>
            <div className="card-elements" id="wolf" data-key={11} onClick={(e) => { randomizeImages(); scoring(e); }}>
                <img className="card-images" src={Wolf}></img>
                <p>Wolf</p>
            </div>
        </div >

    );
}
export default Cards