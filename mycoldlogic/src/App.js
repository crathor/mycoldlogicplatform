import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Main from './containers/Main/Main';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import { Header, Footer } from './components/common';

import axios from 'axios';

const NAV_LINKS = [
  'timeoff',
  'bonus-recognitions',
  'my-schedule',
  'best-site-report',
  'safe-site-report',
  'open-positions'
]

class App extends Component {
  // constructor(props) {
  //   super(props);

  // //   this.state = {
  // //     isAuthenticated: true,
  // //     user: {
  // //       firstName: 'Luis',
  // //     },
  // //     tempRes: '',
  // //     error: ''
  // //   };
  // // }

  // componentDidMount() {
  //   axios.get('/Employees/2')
  //     .then(res => {
  //       this.setState({user: res.data});
  //     });
  // }

  // logUserIn = (user) => {
  //   axios.get('/Employees/2')
  //   .then(res => {
  //     this.setState({user: res.data, isAuthenticated: true});
  //   });
  // }

  // logUserOut = () => {
  //   this.setState({
  //     isAuthenticated: false,
  //     user: ''});
  // };

  renderApplication = () => {
    const { isAuthenticated, user } = this.props.auth;
    if (isAuthenticated) {
      return (
        <Main
          user={user}
          navLinks={NAV_LINKS}
          />
      )
    }
    return <Login />
  }

  render() {
    return (
        <Layout>
          <header>
            <Header />
          </header>
          <section>
            {this.renderApplication()}
          </section>
          <footer>
            <Footer />
          </footer>
        </Layout>
    );
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(App);
