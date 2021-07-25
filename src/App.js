import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
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

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <div className="core">
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/fun_stuff" component={FunStuff} />
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
