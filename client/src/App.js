import React from 'react';

import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Homepage from './components/Homepage/Homepage';
import Result from './components/Result/Result'
import SecondPage from './components/Secondpage/SecondPage'

class App extends React.Component {

 render() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/next" component={SecondPage} />
          <Route path="/result" component={Result} />
        </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
