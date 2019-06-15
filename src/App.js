import React, { Component } from 'react';
import {Header} from './components/header';
import {Footer} from './components/footer';

import {Route,Switch} from 'react-router-dom';
import { AboutUs } from './components/aboutus';

import {Section1} from './components/section1';
import {Section2} from './components/section2';
import Login from "./components/login";
import Admin from "./components/admin";
import Logout from  "./components/logout"
import AboutME from "./components/aboutme"


class App extends Component {
  render() {
    return (
      <div>
        
        <Switch>
          {/* <Route path="/" exact render={()=>(<h1>This is Home Page</h1>)}/> */}
          <Route path="/" exact component={Login}/>
          {/* <Route path="/aboutus/:ename" exact component= {AboutUs}/> */}
          <Route path="/aboutus" exact component= {AboutUs}/>
          <Route path='/admin' exact component={Admin}/>
          <Route path='/section1' exact component={Section1}/>
          <Route path='/section2' exact component={Section2}/>
          <Route path='/logout' exact component={Logout}/>
          <Route path='/aboutme' exact component={AboutME}/>

        </Switch>

       </div> 
    );
  }
}

export default App;
