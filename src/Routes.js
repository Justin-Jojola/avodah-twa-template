import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Index from './pages/index'
import ErrorPage from './pages/error-page'
import Login1 from './pages/login-1'

const Routes = () => {
  return (
    <Switch>
      <Route path="/login-1">
        <Login1 />
      </Route>
      <Route path="/error-page">
        <ErrorPage />
      </Route>
      <Route exact path="/">
        <Index />
      </Route>
      <Route component={Index} />
    </Switch>
  )
}
export default Routes
