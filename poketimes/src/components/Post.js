import React, { Component } from 'react'
//import axios from 'axios'
import {connect} from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {
    /*state = {
        post: null
    }
    componentDidMount= () => {
        //console.log(this.props)
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
            
        
    }*/

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        console.log(this.props)
        this.props.history.push('/') //redirection in props.history
    }
    render(){
        console.log(this.props)
        //change - in past, we had posts from api in state - now we're using Redux, and save our posts in props
        //const post = this.state.post ? ...
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}
//after clicking the specified Post, id of this Post is rewritten to Post's props
const mapStateToProps = (state, ownProps) => { //ownProps attach to props, before adding new Redux props
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find((post) => {
            return post.id === id
        }) //normal JS method find from posts by id
        //alter: post: state.posts.find(post => post.id===id) //used when you've only one-line-statement
    }
}

const mapDispatchToProps = (dispatch) => {
    //param is dispatchMethod -> in codepen wa store.dispatch (PL: wyślij), now we have dispatch buildin
    return {
        //deletePost -> mapped func, is connected with props (this.props.deleteId(param)), due to below (declaration),
        // directly communicate with Redux
        
        //before action creator
        /*deletePost: (id) => {
            dispatch({
                type: 'DELETE_POST',
                id: id //payload
            })
        }*/
        deletePost: (id) => {dispatch(deletePost(id))} //loading func to props, now we can use this func as connected with Redux

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)

/* 
connect() Parameters
connect accepts four different parameters, all optional. By convention, they are called:

mapStateToProps?: Function
mapDispatchToProps?: Function | Object
mergeProps?: Function
options?: Object

####

mapStateToProps?: (state, ownProps?) => Object


If a mapStateToProps function is specified, the new wrapper component will subscribe to Redux store updates.
This means that any time the store is updated, mapStateToProps will be called.
The results of mapStateToProps must be a plain object, which will be merged into the wrapped component’s props.
If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps. */