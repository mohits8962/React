import React from "react";

const Person = ({ person }) => {
    return (
        <div>
            <h2>
                I am {person.name}.
                I am {person.age} years old.
                My skill is {person.skill}
            </h2>
        </div>
    )
};

export default Person;
