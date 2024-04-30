import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/home/Home'
import Navbar from './components/navbar/Nvabar'
import About from './components/about/About'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/navbar">
          <Navbar />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
