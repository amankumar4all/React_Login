import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import '../css/header.css';

export const Header = (props)=>{
    return (
    <div>
        <div className="header" >
        <ul className="header-ul">
            <li ><NavLink to="/admin">Home</NavLink>
            </li>
            <li ><NavLink to="/aboutme">Aboutme</NavLink>
            </li>
            <li ><NavLink to="/section1">Section1</NavLink>
            </li>
            <li ><NavLink to="/section2">Section2</NavLink>
            </li>

            <li className="logout"><NavLink to="/logout">Logout</NavLink>
            </li>
        </ul>
        
        </div>

        
        <div>
        <h1></h1>
        </div>
        </div>
        );
}