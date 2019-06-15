import React from 'react'
import {NavLink,Redirect} from 'react-router-dom'
import {Header} from "./header"


class AboutME extends React.Component{
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
                <h1>This is AMAN KUMAR</h1>
                <p>
I am a lovely boy of my dear parents. I am 14 years old boy and read in class 4th standard in the section A. My name is Suresh Raina. I study in Ryan Public School in Ghaziabad. My grandfather likes to say me Guddu. He always takes me out with him in the morning and evening for the walk. I live with my family in the Rajnagar colony in Ghaziabad.

I go to school with my school bus daily at right time in the morning at 7 am and come to home at 2 pm in the afternoon. I like to go school in proper uniform after become fresh. I say good morning to my class teacher when I reach to my classroom. I enjoy daily with my school friends in the bus and lunch time. I always take part in the sports activities and other extracurricular activities.

My school organizes inter-school competitions at every six months which I must participate. I always come first in every competition. My school celebrates all the important events of the year such as independence Day, Republic Day, Christmas, 2nd October, Mother’s day, Teacher’s day, etc in order to increase our awareness and knowledge about.

We are advised by our class teacher to must participate in the cultural activities while celebrating any event. I generally take part in the poem recitation or speech recitation. I also like dance but not feel so comfortable to dance at event celebration. However, I take part in the dance in my annual function which gets celebrated in the month of November every year. My parents are also invited to the school annual function.

My parents get me out at picnic or long tour in my every vacation during winter or summer season. I live in very good society where some programmes are organized from time to time in order to increase awareness among common public about the social issues. My father always takes me with him to participate in such programmes.

My mom always teaches me about ethics and etiquettes to make me a good citizen of India. I always keep my study room and bed room neat and clean. I always take care of my hygiene and wash hands well with soap before and after eating the food. My mom and dad love me a lot and care for my every likes and dislikes. I like to play ludo or carom with my parents whenever they become free.</p>
                <h1><NavLink to='/admin'>Go To Dashboard</NavLink></h1>
            </div>
        )
    }
}

export default AboutME