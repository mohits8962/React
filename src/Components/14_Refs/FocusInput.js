import React, { Component } from 'react';
// import RefsDemoWithClass from './RefsDemoWithClass';

class FocusInput extends Component {

    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focus()
    }


    render() {
        return (
            <div>
                <label>Focus Input  </label>
                <input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default FocusInput;
