import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = () => { //Navbar doest receive props of Route, unlike Home, About, Contact
    //withRouter supercharge the component (Higher Order Componnets), and make possible to has a route props
    //console.log(props)
    // setTimeout(() =>{
    //     props.history.push('/about') //programatic redirects
    // }, 2000)
    return(
        <nav className="nav-wrapper red darken-3"> {/*materialize CSS*/}
            <div className="container">
                <a href="#top" className="brand-logo">Poke'Times</a>
                <ul className = "right"> {/*ul - unordered/bulleted list*/}
                    <li><Link to="/">Home</Link></li> {/*in browser Link is translated to classic ahref - howevr, we r preventin requesting to server*/}
                    <li><NavLink to="/about">About</NavLink></li> {/*NavLink useful, setting active class - while we want to apply different style f.e.*/ }
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);