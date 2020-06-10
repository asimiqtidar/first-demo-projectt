import React, { Component, useState } from 'react';

function Room () {

    const [isLight, setLight] = useState(true);
    const [age, setAge] = useState(25);

    function ToggleLight () {
        setLight(!isLight);
    }

    const IncreaseAge = () => {
        setAge(age+1);
    }

    return (
        <div>
            <div>Room is {isLight? "Bright": "Dark"} </div>
            <div>Age : {age}</div>
            <button onClick={ToggleLight}>Toggle Light</button>
            <button onClick={IncreaseAge}>Increase Age</button>
        </div>
    );
}

export default Room;
