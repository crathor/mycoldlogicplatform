import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../../components/Header/Header';
import Timeoff from '../Timeoff/Timeoff';
import BonusRecognition from '../BonusRecognition/BonusRecognition';
import OpenPosition from '../OpenPosition/OpenPosition';
import SafeSite from '../SafeSite/SafeSite';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
    };
    this.toggleUserMenu = this.toggleUserMenu.bind(this);
  }

  toggleUserMenu = () => {
    this.setState(prevState => ({displayMenu: !prevState.displayMenu}));
  };

  render(){
    return(
      <div>
        <Router>
          <div>
            <Header
              {...this.props}
              toggleMenu={this.toggleUserMenu}
              displayMenu={this.state.displayMenu}
              />
            <Route exact path='/' render={() => <Dashboard {...this.props}/>} />
            <Route path='/timeoff' render={() => <Timeoff {...this.props}/>} />
            <Route path='/bonus-recognitions' render={() => <BonusRecognition {...this.props}/>} />
            <Route path='/open-positions' render={() => <OpenPosition {...this.props}/>} />
            <Route path='/safe-site-report' render={() => <SafeSite {...this.props}/>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
