import React from "react";

const EventHandlingInFunction = () => {

    const clickHandler = () => {
        console.log("Button Clicked")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
};

export default EventHandlingInFunction;
