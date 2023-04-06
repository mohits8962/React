import React from "react";

const MemoComponent = (props) => {
    console.log("Memo Component Render")

    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
};

export default React.memo(MemoComponent);
