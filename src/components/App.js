import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Login from './Login'
import Nav from './Nav'
import LoadingBar from 'react-redux-loading'
import '../App.css'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.authed === true
              ? <Login />
              : <div>
                  <Route path='/' exact component={Dashboard} />
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authed: authedUser === null,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)