import {Link, Route, Switch} from 'react-router-dom';
import {Landing, Checking, Savings} from './components';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <header>
        <Link to="/">Home</Link>
        <div className="navs">
          <Link to="/checking">Checking</Link>
          <Link to="/savings">Savings</Link>
        </div>

      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/checking">
            <Checking />
          </Route>
          <Route exact path="/savings">
            <Savings />
          </Route>
        </Switch>
      </main>

      <footer>
      <p className="copyright">
            Copyright &copy;
            {new Date().getFullYear()}
            <br />
            ACME Bank
      </p>
      </footer>
    </div>
  );
}

export default App;
