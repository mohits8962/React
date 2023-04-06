import React, { Component } from 'react';
import updatedComponent from './WithCounter';

class ClickCounter extends Component {

    render() {
        const { count, incrementHandler } = this.props

        return (
            <div>
                <button onClick={incrementHandler}>{this.props.name} Clicked {count} Times</button>
            </div>
        );
    }
}

export default updatedComponent(ClickCounter,5);
