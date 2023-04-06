import React, { Component } from 'react';

class MountingLifeCycleMethod extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Mohit"
        }
        console.log("Mounting Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Mounting getDeriverdStateFromProps");
        return null
    }

    componentDidMount() {
        console.log("Mounting componentDidMount");

    }


    render() {
        console.log("Mounting Render");

        return (
            <div>
                <h1>Mounting</h1>
            </div>
        );
    }
}

export default MountingLifeCycleMethod;
