import React, { Component } from 'react';
// import { Container, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { isStrikerOrNonStriker, calcBatsmenRuns } from './calculateBatsmenDetails';

class BatsmenStats extends Component {
  displayBatsmenDetails() {
    const rows = [];
    const batsmanList = this.props.batsmanList.filter(b => !b.yetToBat);
    for (let i = 0; i < batsmanList.length; i += 1) {
      const batsmen = {
        name: batsmanList[i].name,
        isStrikerOrNonStriker:
        isStrikerOrNonStriker(batsmanList[i].name, this.props.striker, this.props.nonStriker),
        runs: calcBatsmenRuns(batsmanList[i].name, this.props.overDetails),
      };
      rows.push(<tr>
        <th scope="row">{i + 1}</th>
        <td>{batsmen.isStrikerOrNonStriker ? <b>{batsmen.name}*</b> : batsmen.name}</td>
        <td>{batsmen.runs}</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1.1</td>
      </tr>);
    }
    return rows;
  }

  render() {
    return (
      <div>
        <h3>Batting Table</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Batsman</th>
              <th>Runs</th>
              <th>Balls</th>
              <th>Fours</th>
              <th>Sixes</th>
              <th>Strike Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.displayBatsmenDetails()}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  overDetails: state.scoreBoardInformation.overDetails,
  striker: state.scoreBoardInformation.striker,
  nonStriker: state.scoreBoardInformation.nonStriker,
  batsmanList: state.scoreBoardInformation.team1.batsmanList,
});


const connectBatsmenStats = connect(mapStateToProps)(BatsmenStats);
export default connectBatsmenStats;

