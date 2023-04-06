import React, { Component } from 'react';
import axios from "axios"

class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ""
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            // axios is promise based library so we can add tray and catch block
            .then((response) => {
                console.log(response)
                this.setState({
                    posts: response.data
                })

            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    errorMsg: "Error in Rretrieving Data"
                })
            })
    }


    render() {
        const { posts, errorMsg } = this.state

        return (
            <div>
                <h3>List Of Posts</h3>
                {
                    <h5>{posts.length}</h5> ?
                        <h5>{posts.map(post => <div key={post.id}>{post.title}</div>)}</h5> :
                        null
                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        );
    }
}

export default PostList;
