import React from 'react'
import {Redirect} from 'react-router-dom'
import { AboutUs } from './aboutus';
import {Header} from './header'
import {Footer} from './footer'

class Admin extends React.Component{
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn=false
        }

        this.state={
            loggedIn
        }

    }

    render(){
        if(this.state.loggedIn===false){
            return <Redirect to="/"></Redirect>
        }
        return(
            <div>
                <Header/>
                <AboutUs/>
                <Footer/>
            </div>
        )
    }

}
export default Admin;