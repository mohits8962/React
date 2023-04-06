import React, { Component } from 'react';

class PropsForClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hello I am {this.props.name}</h1>
            </div>
        );
    }
}

export default PropsForClassComponent;