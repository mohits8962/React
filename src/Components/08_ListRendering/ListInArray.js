import React from "react";

const ListInArray = () => {

    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return (

        // we can also do it like this (below code) 
        // by storing the method in variable and then use that variable
        // this is more precise and easy and clean method
        <div>{nameList}</div>

        // this is how we supposed to do it
        // <div>
        //     {names.map(name => <h2>{name}</h2>)}
        // </div>


        // this is not how we do it
        // <div>
        //     <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2>
        // </div>
    )
};

export default ListInArray;
