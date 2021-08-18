import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Landing from './components/layout/Landing';
import { Footer } from './components/layout/Footer';
import { Login } from './components/auth/Login';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
