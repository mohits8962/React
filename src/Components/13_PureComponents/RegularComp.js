import React, { PureComponent } from 'react';

class RegularComponent extends PureComponent {
    render() {
        console.log("Regular Component Render");

        return (
            <div>
                <h3>Regular Component</h3>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default RegularComponent;
