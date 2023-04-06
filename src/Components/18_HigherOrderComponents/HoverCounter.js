import React, { Component } from 'react';
import updatedComponent from './WithCounter';

class HoverCounter extends Component {

    render() {
        const { count, incrementHandler } = this.props

        return (
            <div>
                <h2 onMouseOver={incrementHandler}>Hovered {count} Times</h2>
            </div>
        );
    }
}

export default updatedComponent(HoverCounter, 10);
