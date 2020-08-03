import React from 'react'
import axios from 'axios'

class ApiList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        var that = this
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response.data); //.data means we just want that part of the API info
                that.setState({ posts: response.data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };

    mapPosts() {
        if (this.state.posts != null) {
            return (this.state.posts).map((singlePost) => {
                return (
                    <li key={singlePost.id} >
                        <h3>title: {singlePost.title}</h3>
                        <h5>body: {singlePost.body}</h5>
                    </li>
                )
            })
        } else {
            return <li>Loading...</li>
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.mapPosts()}
                </ul>
            </div>
        )
    }
}

export default ApiList