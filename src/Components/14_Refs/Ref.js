import React from "react";
import RefsDemoInNormalHTML from "./RefsDemoInNormalHTML";
// import RefsDemoWithClass from "./RefsDemoWithClass";
import FocusInput from "./FocusInput";

const Ref = () => {
    return (
        <div>
            <RefsDemoInNormalHTML/>
            {/* <RefsDemoWithClass/> */}
            <FocusInput/>
        </div>
    )
};

export default Ref;
