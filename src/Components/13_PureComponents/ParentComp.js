import React, { Component } from 'react';
// import RegularComp from "./RegularComp"
// import PureComp from "./PureComp"
import MemoComponent from './MemoComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Mohit'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Mohit'
            })
        }, 2000)
    }

    render() {
        console.log("***************Parent Component Render*****************");

        return (
            <div>
                <h3>Parent Component</h3>
                <MemoComponent name={this.state.name} />
                {/* <RegularComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        );
    }
}

export default ParentComponent;
