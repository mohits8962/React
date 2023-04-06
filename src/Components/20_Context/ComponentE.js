import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './UserContext';

class ComponentE extends Component {

    // but this only works in class component
    // way 01
    static contextType = UserContext
    
    render() {
        return (
            <div>
                <h3>Component E Context {this.context}</h3>
                <ComponentF />
            </div>
        );
    }
}

// way 02
// ComponentE.contextType = UserContext

export default ComponentE;
