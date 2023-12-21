import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./style/style.css"
import AboutMe from './pages/AboutMe/aboutMe'
import Contact from './pages/Contact/contact'
import Home from "./pages/Home/home"
import Header from "./components/header/header"

const App = () => {
  return (
    <div className="app">
        <Router>
            <Header/>
        <Switch> 
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/aboutMe">
                <AboutMe/>
            </Route>
            <Route exact path="/contact">
                <Contact/>
            </Route>
        </Switch>
        </Router>
    </div>
  )
}

export default App
