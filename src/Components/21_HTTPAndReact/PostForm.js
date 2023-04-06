import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            UserId: "",
            Title: "",
            Body: ""
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { UserId, Title, Body } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name='UserId' value={UserId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name='Title' value={Title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name='Body' value={Body} onChange={this.changeHandler} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;
