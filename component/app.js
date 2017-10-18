import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DisplayBoard from './displayBoard';
import getNewAirData from '../actions/index';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { location: null };
  }
  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ location: position });
        this.props.ge(this.state.location.coords);
      });
    }
    console.log('nothing');
  }
  render() {
    if (this.state.location) {
      const location = this.state.location.coords;
      return (
        <div>
          <DisplayBoard location={location} />
          <button>Check Now</button>
        </div>
      );
    }
    return (<h1>loading</h1>);
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ge: getNewAirData }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
