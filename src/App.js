import './App.css';
import Header from './components/layout/Header';
import { Fragment } from 'react';
import Landing from './components/layout/Landing';

function App() {
  return (
    <Fragment>
      <Header />
      <Landing />
    </Fragment>
  );
}

export default App;
