import React, { Component } from 'react'
import './App.scss'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/MyProfile';
import Slider from './components/Slider'
import Main from './components/Main'
import ProfileBar from './components/profileBar'
import Cross from './images/cross.svg'
import Footer from './components/Footer'
import Profile_Editor from './components/MyProfile/Profile_Editor'
import Post from './components/Main/Post/Post'
import Login from './components/Login/index'
import Registration from './components/Login/Registration/Registration'




export default class App extends Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <div className="App">
              <div className="content">
                <div className="content-main">
                  <Slider />
                  <div className="new-post">New posts available
                    <img src={Cross} alt="" />
                  </div>
                  <Main like={439} comment={34} />
                  <Main like={232} comment={39} />
                </div>
                <div className="profile-bar">
                  <ProfileBar />
                  <Footer />
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/profile_editor" component={Profile_Editor} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />

        </Switch>

      </Router>
    )
  }
}

