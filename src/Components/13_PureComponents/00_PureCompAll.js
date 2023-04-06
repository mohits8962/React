import React, { Component } from 'react';
import ParentComponent from './ParentComp';
// import RegularComponent from './RegularComp';
// import PureComp from './PureComp';

class PureCompAll extends Component {
    render() {
        return (
            <div>
                <ParentComponent/>
                {/* <PureComp/> */}
                {/* <RegularComponent/> */}
            </div>
        );
    }
}

export default PureCompAll;
