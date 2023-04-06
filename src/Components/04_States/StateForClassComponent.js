import React, { Component } from 'react';

class StateForClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Welcome To My Channel",
            count: 0
        }
    }

    handleChange = () => {
        this.setState({
            message: "Thanks For Subscribing"
        })
    }

    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            // we have to put it in callback like this
            // whenever we need to execute some code after the state has changed
            console.log("callback Value", this.state.count)
        })

        // this get rendered before the setstate
        // instead of this we have to put it in callback like above statement
        console.log(this.state.count)
    }


    render() {
        return (
            <div>
                <h1>StateForClassComponent</h1>
                <h3>{this.state.message}</h3>
                <button onClick={this.handleChange} >Subscribe</button>

                {/* ------------------------------------------------ */}

                <h1>Count Example</h1>
                <div>
                    <h3>Count - {this.state.count}</h3>
                    <button onClick={this.handleCount}>Add</button>
                </div>
            </div>
        );
    }
}

export default StateForClassComponent;
