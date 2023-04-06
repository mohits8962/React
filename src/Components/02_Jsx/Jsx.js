import React from "react";

const Jsx = () => {

    // this is jsx
    // return (
    //     <div>
    //         <h1>
    //             Hello I am Jsx
    //         </h1>
    //     </div>
    // )

    // *******************************************************
    
    // now wwithout jsx
    return React.createElement(
        'div',
        { id: 'hello', className: 'dummy' },
        React.createElement('h1', null, "Hello i am not Jsx"))
};

export default Jsx;


