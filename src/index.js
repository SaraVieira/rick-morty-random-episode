import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './Pages/Home'
import Episode from './Pages/Episode'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'tachyons'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/episode/:id" component={Episode} />
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
