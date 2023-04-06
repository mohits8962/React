import React from "react";

const PropsForFunctionalComponent = (props) => {
  return (
    <div>
        <h1>Hello I am {props.name}</h1>
        {props.children}
    </div>
  )
};

export default PropsForFunctionalComponent;
