import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}