import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"


let nav = ["Home", "About Us", "Reviews", "Tracking", "Support", "Contact Us"];

var urlFormat = (string) => string.toLowerCase().replace(" ", "-");

const Navbar = (props) => {
    
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                {/* logo / brand */}
                <Link to={'/'} className="navbar-brand">PHONE HAWKER</Link>

                {/* collapse button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* navigation links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        {nav.map( (el) => {
                                return <li key={el} className="nav-item">
                                            <Link to={urlFormat(el)} className="nav-link">{el}</Link>
                                        </li>
                                }
                            )
                        }
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;
