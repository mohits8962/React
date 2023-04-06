import React, { Component } from 'react';

class RefsDemoWithClass extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    focusInput() {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <label> RefsDemoWithClass Input Box  </label>
                <input type="text" ref={this.inputRef} />
                {/* <button onClick={this.clickHandler}>Click</button> */}
            </div>
        );
    }
}

export default RefsDemoWithClass;
