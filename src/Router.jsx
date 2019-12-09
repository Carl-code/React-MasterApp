import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Peliculas from './components/Peliculas'
import Error from './components/Error'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/ruta-prueba' component={Peliculas} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
