import './style/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Home } from './components/home'
import { Projects } from './components/projects'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { FunStuff } from './components/fun_stuff'
import { useState } from 'react'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  return (
    <Router>
      <Navbar toggleTheme={() => setDarkTheme(!darkTheme)} />
      <div className={`content ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
        <div className="core">
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/fun_stuff">
              <FunStuff />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
