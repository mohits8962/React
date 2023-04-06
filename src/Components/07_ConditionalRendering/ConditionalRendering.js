import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {

        // *****Way04 -- Short Circuit Operator*****
        // isme agar true hoga tp statement print krega ni to ni krega 
        return this.state.isLoggedIn && <div>Welcome Mohit</div>


        // *****Way03 -- Ternary Operator*****
        // return (
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Mohit</div>
        //     ) : (
        //         <div>Welcome Guest</div>
        //     )
        // )

        // *****Way02 -- Element Variable*****
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Mohit</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        // *****Way01 -- If Else*****
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Mohit</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }


        // return (
        //     <div>
        //         <div>Welcome Mohit</div>
        //         <div>Welcoome Guest</div>
        //     </div>
        // );
    }
}

export default ConditionalRendering;
