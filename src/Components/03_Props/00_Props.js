import React from "react";

import PropsForClassComponent from "./PropsForClassComponent";
import PropsForFunctionalComponent from "./PropsForFunctionalComponent"

const Props = () => {
    return (
        <div>
            <PropsForFunctionalComponent name='PropsForFunctionalComponent'/>
            {/* we can pass like below when we dont know the name of props */}
            <PropsForFunctionalComponent name='PropsForFunctionalComponent 02'>
            <p>We can also Pass props like that</p>
            </PropsForFunctionalComponent>

            {/* **************************/}

            <PropsForClassComponent name="PropsForClassComponent"/>
        </div>
    )
};

export default Props;
