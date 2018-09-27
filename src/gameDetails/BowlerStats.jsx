import React, { Component } from 'react';
// import { Container, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import fetchBowlerStats from './FetchBowlerStats';

class BowlerStats extends Component {
  displayBowlerDetails() {
    const rows = [];
    if(this.props.bowlerList !== undefined) {
      const bowlersList = this.props.bowlerList;
      for (let i = 0; i < bowlersList.length; i += 1) {
        const bowlerStats = fetchBowlerStats(bowlersList[i].name, this.props.overDetails);
        rows.push(<tr>
          <th scope="row">{i + 1}</th>
          <td>{bowlersList[i].name}</td>
          <td>{bowlerStats.totalOversBowled}</td>
          <td>{bowlerStats.totalMaidenOvers}</td>
          <td>{bowlerStats.totalRunsConceded}</td>
          <td>{bowlerStats.totalWicketsTaken}</td>
                  </tr>);
      }
    }
    return rows;
  }

  render() {
    return (
      <div>
          <h3>Bowling Table</h3>
          <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Bowler</th>
              <th>Overs</th>
              <th>Maiden</th>
              <th>Run</th>
              <th>Wickets</th>
            </tr>
          </thead>
          <tbody>
            {this.displayBowlerDetails()}
          </tbody>
        </Table>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  overDetails: state.scoreBoardInformation.overDetails,
  bowlerList: state.scoreBoardInformation.team2.bowlerList,
});

export default connect(mapStateToProps)(BowlerStats);
