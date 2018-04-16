import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import People from './components/People'
import Form from './components/Form'
import NotFound from './components/NotFound'
import Ternak from './pages/Ternak'
import Kandang from './pages/Kandang'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div>
            <Header />
              <ul>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/form">Form</Link></li>
                <li><Link to="/kandang">Kandang</Link></li>
                <li><Link to="/ternak">Ternak</Link></li>
                <li><Link to="/help">Redirect to people</Link></li>
              </ul>
                <Switch>
                  <Route exact path='/' component={People}/>
                  <Route exact path='/form' component={Form}/>
                  <Redirect from="/help" to="/people" />
                  <Route path='/people' component={People}/>
                  <Route path='/ternak' component={Ternak}/>
                  <Route path='/kandang' component={Kandang}/>
                  <Route component={NotFound}/>
                </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
