import React, { useState } from "react";

function App() {
    const [isClicked, setClick] = useState(false);
    // const [numCount, setNumCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    // const [specialCount, setSpecialCount] = useState(0);
    const [inputText, setInputText] = useState("");
    // const specialArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

    function analyseText(event) {
        const userText = event.target.value;
        setInputText(userText);
    }

    function handleEvents() {
        handleClick(inputText);
        handleWordCount(inputText);
    }

    function handleClick(userString) {
        if (userString.length !== 0) {
            setClick(true);
        } 
    }

    function handleWordCount(userString) {
        const charArr = [...userString];
        const charArrLength = charArr.length;

        let numberOfSpaces = 0;

        for (let i = 0; i < charArrLength; i++) {
            if (charArr[i] === " ") {
                numberOfSpaces += 1;
            }
        }
        setWordCount(numberOfSpaces + 1);
        console.log(numberOfSpaces);
    }

    return (
        <div className="div-gradient">
            <h1><span>ANALYSE YOUR TEXT</span></h1>
            <textarea onChange={analyseText} placeholder="Enter your text" cols="70" rows="10"></textarea>
            <div>
                <button onClick={handleEvents} className="btn btn-outline-primary btn-analyse">ANALYSE</button>
            </div>
            <h2>{isClicked ? wordCount : 0} words</h2>
        </div>
    )
}

export default App;