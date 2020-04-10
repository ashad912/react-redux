import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//import axios from 'axios' //used when App.js made role Redux xd

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
  state = {
    posts: [ ]
  }
  /*componentDidMount(){
      setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts') //its async about 1s-0.5s
          .then(res =>{
              console.log(res);
              const ix = Math.floor(Math.random() * (res.data.length - 10));
              //let posts = [...this.state.posts, res.data.slice(ix, ix + 10)] //slice begin end index NICE - copy first deepness lvl
              console.log(ix);
              //console.log(res.data.slice(ix, ix + 10))
              this.setState({
                  posts: res.data.slice(ix, ix + 10)
              })
          }) //its fires ONLY when .get is fully completed!!!
      }, 2000)
  }*/ //used before Redux - funny, i've used App.js likely works Redux Container


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch> {/*choose only one route, match from top*/}
            {/*<Route exact path="/" render={(props) => <Home posts={this.state.posts} {...props}/>} /> //mod from component to render//*/
            /*above: old one used when App.js made role Redux xd*/}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} /> {/*we got subset "/" when we are in contact/about*/}
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} /> {/*route param*/}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
