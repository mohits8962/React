import React, { Component } from 'react';

class RefsDemoInNormalHTML extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }


    render() {
        return (
            <div>
                <label>Input Box  </label>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemoInNormalHTML;
