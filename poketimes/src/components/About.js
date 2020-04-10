import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4> 
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugit id incidunt architecto. Ullam, eligendi asperiores? Sapiente dolore sint nesciunt, iste, eaque unde alias quas, inventore quo corporis aperiam itaque!</p>
        </div>
    )


}

export default Rainbow(About) //About is passed by higher order component and things with it happen in Rainbow component
//About -> Rainbow things -> land by route of App.js
//works once for refresh - if we used Link, not ahref, we dont refreshing the page!!!