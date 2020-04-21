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
import '../App.css'



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
            <Nav />

            {this.props.authed === false
              ? <Login />
              : <div>
                  <div>
                    <div>
                      Hi {this.props.authedUser.name}
                    </div>
                    <button onClick={this.logOut}>Log Out</button>
                  </div>
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