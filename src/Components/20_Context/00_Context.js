import React, { Component } from 'react';
import ComponentC from './ComponentC';
import { UserProvider } from './UserContext';

class Context extends Component {
    render() {
        return (
            <div>
                <UserProvider value={"Mohit"}>
                    <ComponentC />
                </UserProvider>
            </div>
        );
    }
}

export default Context;
