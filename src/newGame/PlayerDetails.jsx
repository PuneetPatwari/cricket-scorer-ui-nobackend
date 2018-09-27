import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import { connect } from 'react-redux';
import RLink from 'react-router-dom/Link';
import { setBatmensList, setBowllerList } from './actions';
import { setCurrentBowler, setStrikerNonStrikerName } from '../scorer/actions';

class PlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batsmanList: [],
      bowllerList: [],
    };
  }
  setBatsmenName(value, index) {
    this.state.batsmanList[index].name = value;
  }
  setBallerName(value, index) {
    // debugger;
    this.state.bowllerList[index].name = value;
  }
  displayBatsmenDetails() {
    this.state.batsmanList = this.props.batsmanList;
    const rows = [];
    this.props.batsmanList.forEach((element, index) => {
      rows.push(<Row>
        <Col>
          <tr>
            <td>
              <label htmlFor="id"> {index + 1}. </label>
            </td>
            <td>
              <input
                id="id"
                type="text"
                defaultValue={element.name}
                onChange={event => this.setBatsmenName(event.target.value, index)}
              />
            </td>
          </tr>
        </Col>
      </Row>);
    });
    return rows;
  }

  displayBowlerDetails() {
    this.state.bowllerList = this.props.bowllerList;
    const rows = [];
    this.props.bowllerList.forEach((element, index) => {
      rows.push(<Row>
        <Col>
          <tr>
            <td>
              <label htmlFor="id"> {index + 1}. </label>
            </td>
            <td>
              <input
                id="id"
                maxLength="50"
                name="name"
                type="text"
                defaultValue={element.name}
                onChange={event => this.setBallerName(event.target.value, index)}
              />
            </td>
          </tr>
        </Col>
      </Row>);
    });
    return rows;
  }

  render() {
    return (
      <Container>
        <br />
        <center>
          <h2> Player Details</h2>
        </center>
        <br />
        <br />
        <br />
        <Row>
          <Col>
            <form>{this.displayBatsmenDetails()}</form>
          </Col>
          <Col>
            <form>{this.displayBowlerDetails()}</form>
          </Col>
        </Row>
        <br />
        <br />
        <center>
          <RLink
            className="btn btn-primary"
            to="/scorer"
            onClick={() =>
              this.props.submitPlayerDetails(this.state.batsmanList, this.state.bowllerList)
            }
          >
            {' '}
            Submit Player Details{' '}
          </RLink>{' '}
        </center>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitPlayerDetails: (batsmanList, bowllerList) => {
    dispatch(setBatmensList(batsmanList));
    dispatch(setBowllerList(bowllerList));
    dispatch(setStrikerNonStrikerName(batsmanList));
    dispatch(setCurrentBowler(bowllerList));
  },
});

const mapStateToProps = state => ({
  batsmanList: state.scoreBoardInformation.team1.batsmanList,
  bowllerList: state.scoreBoardInformation.team2.bowllerList,
  // batsmanListGame: state.gameInformationReducer.team1Players,
  // bowllerListGame: state.gameInformationReducer.team2Players,
});

const connectPlayerDetails = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerDetails);

export default connectPlayerDetails;
