import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { logOut } from '../actions/authedUser'
import Dashboard from './Dashboard'
import Login from './Login'
import Nav from './Nav'
import AddPoll from './AddPoll'
import ErrorPage from './Error'
import Leaderboard from './Leaderboard'
import Poll from './Poll'
import LoadingBar from 'react-redux-loading'
//import '../App.css'

import { IoMdLogOut } from 'react-icons/io'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  logOut = () => {
    this.props.dispatch(logOut())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <div className='app-header'>
              <Nav />
              {this.props.authed && 
                <div className="header-user">
                  <img
                    src={this.props.authedUser.avatarURL}
                    alt={`Avatar of ${this.props.authedUser.name}`}
                    className='header-avatar'
                  />
                  <div className='header-item'>
                    Hi {this.props.authedUser.name}
                  </div>
                  <div className='header-item'>
                    <IoMdLogOut className="log-out" onClick={this.logOut} />
                  </div>
                </div>
              }
            </div>
            {this.props.authed === false
              ? <Login />
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/add' exact component={AddPoll} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/question/:id' component={Poll} />
                  <Route path='/login' component={Login} />
                  <Route path='/404' component={ErrorPage} />
                </div>
              }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authed: authedUser !== null,
    authedUser: users[authedUser]
  }
}

export default connect(mapStateToProps)(App)