import './App.css';
import Header from './components/layout/Header';

import { Fragment } from 'react';
import Landing from './components/layout/Landing';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Landing />
      <Footer />
    </Fragment>
  );
}

export default App;
