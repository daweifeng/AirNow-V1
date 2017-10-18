import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayBoard extends Component {
  constructor(props) {
    super();

    this.state = { pm25Data: null };
    this.updatePM25 = this.updatePM25.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.airData[0])
      this.updatePM25(nextProps.airData[0].data.iaqi.pm25.v)
  }

  // Create the effect of counting
  updatePM25(pm25Data) {
    for (let i = 0; i < pm25Data; i++) {
      setTimeout(
        ((i) => {
          return () => {
            this.setState({ pm25Data: i});
          }
        })(i), ((i) => {
          return i*60
        })(i)
      );
    }
    return pm25Data;
  }
  render() {
    // console.log('receive', this.props.airData[0]);
    if (this.props.airData[0]) {
      return (
        <div>
          <div>
            <h2>AirNow</h2>
          </div>
          <h1 className="city">{this.props.airData[0].data.city.name}</h1>
          <div className="main-meter">
            <div className="pm25"> {this.state.pm25Data} </div>
            <h1>PM2.5</h1>
          </div>
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
