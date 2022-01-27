import React from "react"
import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <div className="nav-bar">
            <h1>Super Villain Conference</h1>
            <ul>
                <Link to="/SuperVillainConference"><a className="button-54" href="#Home" id="home"><li>Home</li></a></Link>
                <Link to="/snacks"><a className="button-54" href="#"><li>Snacks</li></a></Link>
                {/* Note this website is definetly not BUGS free */}
                <Link to="/bugsBree"><a className="button-54 gradient-anim" href="#"><li>Bugs Free</li></a></Link>

            </ul>
        </div>
    )
}

