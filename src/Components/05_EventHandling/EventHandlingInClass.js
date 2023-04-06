import React, { Component } from 'react';

class EventHandlingInClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
    }

    handleClick = () => {
        console.log("clicked")
        this.setState({
            message:"Hello there"
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick.bind(this)}>Click Here</button>
            </div>
        );
    }
}

export default EventHandlingInClass;
