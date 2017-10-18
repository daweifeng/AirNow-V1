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
          <h2>The Current PM2.5 Index</h2>
          <h3>lat: {this.props.location.latitude}</h3>
          <h3>lon: {this.props.location.longitude}</h3>
          <h1>{this.props.airData[0].data.city}</h1>
          <h1>Air Quality Index: {this.props.airData[0].data.current.pollution.aqius}</h1>
        </div>
      );
    }
    return (<h2>loading data</h2>);
  }
}

const mapStateToProps = (state) => {
  return { airData: state.airData };
};

export default connect(mapStateToProps)(DisplayBoard);
