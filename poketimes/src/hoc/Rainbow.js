import React from 'react'

const Rainbow = (WrappedComponent) => {//like wrapped by withRouter component
    //as example About

    const colours = ['red','pink','orange','blue','green','yellow'];
    const randomColour = colours[Math.floor(Math.random()*5)] //floor gives int

    const className = randomColour + "-text"

    //below: for example props of About
    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/> {/*here is for example all things of About Comp
                withour ...props, there is no update here :( - we have only About, without Rainbow changes, like making new Student,
                with all props, wihtout saving to repository*/}
            </div>
        )
    }

}

export default Rainbow