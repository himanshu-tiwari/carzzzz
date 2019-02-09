import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className="navbar">
            <Link to='/' className="brand">
                Carzzz
            </Link>
        </nav>
    )
};

export default Navbar;