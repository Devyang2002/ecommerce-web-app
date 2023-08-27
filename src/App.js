import React from 'react'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout'

export default function App() {
  return (
    <Router>
    <div className='App'>
      <Switch>
      <Route path='/checkout'>
        <Header/>
        <Checkout/>
      </Route>
        <Route path="/">
      <Header/>
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  )
}