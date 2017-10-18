import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DisplayBoard from './displayBoard';
import getNewAirData from '../actions/index';
import '../css/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { location: null };
    this.checkNowOnClick = this.checkNowOnClick.bind(this);
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
  checkNowOnClick(e) {
    if (navigator.geolocation) {
      this.setState({ location: null });
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ location: position });
        this.props.ge(this.state.location.coords);
      });
    }
  }
  render() {
    if (this.state.location) {
      const location = this.state.location.coords;
      return (
        <div>
          <DisplayBoard location={location} />
          <button onClick={this.checkNowOnClick} className="check-button">Check Now</button>
        </div>
      );
    }
    return (<h1>loading</h1>);
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ge: getNewAirData }, dispatch);

export default connect(null, mapDispatchToProps)(App);
