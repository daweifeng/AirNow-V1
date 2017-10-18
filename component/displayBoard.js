import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayBoard extends Component {
  constructor(props) {
    super();
  }
  render() {
    console.log('receive', this.props.airData[0]);
    if (this.props.airData[0]) {
      return (
        <div>
          <h2>AirNow</h2>
          <h1>{this.props.airData[0].data.city.name}</h1>          
          <h5>lat: {this.props.location.latitude}</h5>
          <h5>lon: {this.props.location.longitude}</h5>
          <h1>Air Quality Index: {this.props.airData[0].data.aqi}</h1>
          <h1>PM2.5: {this.props.airData[0].data.iaqi.pm25.v}</h1>
        </div>
      );
    }
    return (<h2>loading data...</h2>);
  }
}

const mapStateToProps = (state) => {
  return { airData: state.airData };
};

export default connect(mapStateToProps)(DisplayBoard);
