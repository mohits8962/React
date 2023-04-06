import React, { useState } from "react";

const StateForFunctionalComponent = () => {
    const [message, setMessage] = useState("Welcome To My Channel")

    const handleChange = () => {
        setMessage("Thanks For Subscribing")
    }


    return (
        <div>
            <h1> StateForFunctionalComponent</h1>
            <h3>{message}</h3>
            <button onClick={handleChange}>Subscribe</button>
        </div>
    )
}

export default StateForFunctionalComponent;
