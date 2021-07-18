import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Experience } from './components/experience'
import { Home } from './components/home'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <div className="core">
          <Switch>
            <Route path="/experience" component={Experience} />
            <Route path="/" component={Home} />
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
