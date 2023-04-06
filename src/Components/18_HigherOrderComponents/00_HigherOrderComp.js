import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const HigherOrderComp = () => {
    return (
        <div>
            <ClickCounter name={"Mohit"} />
            <HoverCounter />
        </div>
    )
};

export default HigherOrderComp;
