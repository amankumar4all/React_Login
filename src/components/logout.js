import React from 'react'
import {NavLink} from 'react-router-dom'

class LogOut extends React.Component{
    constructor(props){
        super(props)
        localStorage.removeItem("token");
    }

    render(){
        return(
            <div>
                <h1>Your have Been Successfully Logout</h1>
                <h1><NavLink to='/'>Go To LogIn</NavLink></h1>
            </div>
        )
    }
}

export default LogOut