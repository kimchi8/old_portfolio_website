import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './HomePage';
import About from './AboutMe';
import Work from './Work';
import { NavLink } from 'react-router-dom';
import flower from '../images/tyler_flower.png';

const Navbar = () => {


    return <div>
        <img src={flower} alt="tyler the creator flower" id='navbar-icon' />
        <nav className='navbar-container'  >

            <NavLink to="/" className={"navtext home-nav"} activeClassName="activeNavTag">Home</NavLink>
            <NavLink to="/about" className={"navtext about-nav"} activeClassName="activeNavTag">About</NavLink>
            <NavLink to="/work" className={"navtext work-nav"} activeClassName="activeNavTag">Work</NavLink>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
        </Routes>
    </div >
}

export default Navbar