import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Header from '../../components/Header/Header';
import Timeoff from './Timeoff/Timeoff';
import BonusRecognition from './BonusRecognition/BonusRecognition';
import OpenPosition from './OpenPosition/OpenPosition';
import SafeSite from './SafeSite/SafeSite';
import MySchedule from './MySchedule/MySchedule';
import BestSiteReport from './BestSiteReport/BestSiteReport';
import './Main.css';

class Main extends Component {
  render(){
    return(
      <div className='Main'>
        <Router>
          <div>
            <div className='Main-header'>
              <Header {...this.props} />
            </div>
            <Route exact path='/' render={() => <Dashboard {...this.props}/>} />
            <Route path='/timeoff' render={() => <Timeoff {...this.props}/>} />
            <Route path='/bonus-recognitions' render={() => <BonusRecognition {...this.props}/>} />
            <Route path='/open-positions' render={() => <OpenPosition {...this.props}/>} />
            <Route path='/safe-site-report' render={() => <SafeSite {...this.props}/>} />
            <Route path='/my-schedule' render={() => <MySchedule {...this.props}/>} />
            <Route path='/best-site-report' render={() => <BestSiteReport {...this.props}/>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
