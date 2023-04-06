import React from "react";
// import ClickCounterTwo from "./ClickCounterTwo";
// import HoverCounterTwo from "./HoverCounterTwo";
// import User from "./User";
import Container from "./Container";
import ClickCounterTwo from "./ClickCounterTwo";
import HoverCounterTwo from "./HoverCounterTwo";

const RenderProps = () => {
    return (
        <div>
            <Container
                render={(count, incrementCount) =>
                    <ClickCounterTwo
                        count={count}
                        incrementCount={incrementCount}>
                    </ClickCounterTwo>}>
            </Container>
            <Container
                render={(count, incrementCount) =>
                    <HoverCounterTwo
                        count={count}
                        incrementCount={incrementCount}>
                    </HoverCounterTwo>}>
            </Container>
            {/* <ClickCounterTwo />
            <HoverCounterTwo />
            <User render={(isLoggedIn) => isLoggedIn ? "Mohit" : "Guest"} /> */}
        </div>
    )
};

export default RenderProps;
