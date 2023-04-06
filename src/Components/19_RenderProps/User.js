import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.render(true)}</h3>
            </div>
        );
    }
}

export default User;
