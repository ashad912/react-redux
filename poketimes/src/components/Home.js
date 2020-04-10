import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux' 
//import axios from 'axios'

class Home extends Component {//convertion due to using Axios, add componentDidMount, after mod axios is unused
    //above like class
    //alternative
    //mod created to get data only when page refreshed - its using componentDidMount in App.js, instead in Home.js
    //due to synchronization, Home is still class, however after mod, it can be const (read below)
    //const Home = ({posts}) => {}
    //directy console.log(posts) without render() and const {posts} = this.props declaration
    //const HAS NOT PROPS, AND STATE, so we get only passed param
    //in const case in route invoke (App.js) you dont need to pass {...this.props}, cause const has not props xd

    componentDidMount = () => {
        console.log("mounted")
    }

    componentDidUpdate = () => {
        console.log("updated")
    }

    render(){
        const { posts } = this.props; //optional to below
        //const posts = this.state.posts;
        console.log(this.props)
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
    


}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home); // return hoc component, the invoke Home
//func is passed as param - its invoking, and after that we invoke Home - connection with Redux