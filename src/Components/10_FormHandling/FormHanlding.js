import React, { Component } from 'react';

class FormHanlding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comments: "",
            topics: ""
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicsChange = (event) => {
        this.setState({
            topics: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
        event.preventDefault()
    }


    render() {
        return (
            <div>
                <h2>Form Component</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>UserName </label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleUserNameChange}
                        />
                    </div>

                    <div>
                        <label>Comments </label>
                        <textarea
                            value={this.state.comments}
                            onChange={this.handleCommentsChange}
                        />
                    </div>

                    <div>
                        <label>Topic</label>
                        <select value={this.state.topics} onChange={this.handleTopicsChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormHanlding;
