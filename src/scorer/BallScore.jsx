import React, { Component } from 'react';
import {
  Container,
  Col,
  Button,
  Row,
} from 'reactstrap';
import { connect } from 'react-redux';
import { resetSelectedPlayerToBlank, updateOverDetails, updateScoreDetails, swapBatsman, changeBowlerIfOverCompleted, toggleBowlerModal, toggleModal, updateStrikerBatsman, updateWicket } from './actions';
import DropDownModal from '../modal/Modal';
import './Scorer.css';
import './BallScore.css';

class BallScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: -1,
      extra: '',
      isOut: false,
    };
  }
  onNextBallClick(run, extra, selectedBatsman) {
    if (this.props.currentOver === this.props.overs) {
      if (this.props.team1Score.totalScore > this.props.team2Score.totalScore) {
        alert(`${this.props.team1Score.name } has WON. You may watch GAME DETAILS`);
        return;
      }
      if (this.props.team1Score.totalScore < this.props.team2Score.totalScore) {
        alert(`${this.props.team2Score.name } has WON. You may watch GAME DETAILS`);
        return;
      }
      if (this.props.team1Score.totalScore === this.props.team2Score.totalScore) {
        alert('Match has ended in a TIE. You may watch GAME DETAILS');
        return;
      }
    }
    if (this.props.team1Score.totalScore > this.props.team2Score.totalScore) {
      alert(`${this.props.team1Score.name } has WON. You may watch GAME DETAILS`);
      return;
    }
    this.props.handleCurrentBall(run, extra, selectedBatsman);
    this.resetRun();
    this.resetExtra();
    if (this.props.team1Score.totalScore > this.props.team2Score.totalScore) {
      alert('Team1 has WON. You may watch GAME DETAILS');
      return;
    }
    if (this.props.currentBall === 5 && this.props.currentOver < this.props.overs - 1) {
      console.log("Toggle Bowler Modal");
      
      this.props.toggleBowlerModal();
    }
  }

  
  setRun(e) {
    this.setState({ run: Number(e.target.value) });
  }
  setExtra(e) {
    this.setState({ extra: this.state.extra === e.target.value ? '' : e.target.value });
  }
  isTeam1Won() {
    if (this.props.team1Score.totalScore > this.props.team2Score.totalScore) {
      alert(`${this.props.team1Score.name } has WON. You may watch GAME DETAILS`);
      return true;
    }
    return false;
  }
  resetExtra() {
    this.setState({ extra: '' });
  }
  resetRun() {
    this.setState({ run: -1 });
  }
  toggleIsOut() {
    this.setState({ isOut: !this.state.isOut });
  }
  // toggleModal() {
  //   this.setState({ modal: !this.state.modal });
  // }
  renderRuns() {
    const rows = [];
    for (let i = 0; i < 8; i += 1) {
      rows.push(
        <Button
          className={`run-button ${i === this.state.run ? 'bg-blue' : ''}`}
          key={i}
          value={i}
          onClick={event => this.setRun(event)}
          color="primary"
        >
          {'  '}
          {i}
          {'  '}
        </Button>);
    }
    return (
      <Container className="select-score">
        <Row>
          <h5> Runs: </h5>
        </Row>
        <Row>
          {rows}
        </Row>
      </Container>
    );
  }

  renderExtras() {
    return (
      <Container>
        <Container>
          <Row>
            <Col style={{ textAlign: 'left' }}>
              <h5> Extras: </h5>
            </Col>
          </Row>
        </Container>
        <Container>
          <Button
            color="info"
            onClick={event => this.setExtra(event)}
            className={`run-button ${this.state.extra === 'W' ? 'bg-blue' : ''}`}
            value="W"
          >
            W
          </Button>
          <Button
            color="info"
            onClick={event => this.setExtra(event)}
            className={`run-button ${this.state.extra === 'N' ? 'bg-blue' : ''}`}
            value="N"
          >
            N
          </Button>
          <Button
            color="info"
            onClick={event => this.setExtra(event)}
            className={`run-button ${this.state.extra === 'B' ? 'bg-blue' : ''}`}
            value="B"
          >
            B
          </Button>
          <Button
            color="info"
            onClick={event => this.setExtra(event)}
            className={`run-button ${this.state.extra === 'LB' ? 'bg-blue' : ''}`}
            value="LB"
          >
            LB
          </Button>
        </Container>
      </Container>
    );
  }

  renderOut() {
    return (
      <Container>
        {this.props.selectedBatsman === '' ?
          <Col style={{ textAlign: 'center' }}>
            <Button color="danger" onClick={() => handlePlayerOut(this.props)}> Out </Button>
            <DropDownModal batsman={true} />
          </Col> :
          <Col style={{ textAlign: 'center' }}>
            <Button color="danger" disabled={true}> Out </Button>
            <DropDownModal batsman={true} />
          </Col>
        }
      </Container>
    );
  }

  renderNextBall() {
    return (
      <Container>
        <Col style={{ textAlign: 'center' }}>
          <Button
            outline
            color="primary"
            onClick={() => this.onNextBallClick(this.state.run, this.state.extra, this.props.selectedBatsman)}
          >
            Next Ball
          </Button>
        </Col>
      </Container>
    );
  }

  renderModalForNextBowler() {
    return (<div>
        <DropDownModal batsman={false} />
      </div>);
  }

  render() {
    console.log('Rendrer Model');
    
    return (
      <div>
        {this.renderRuns()}
        <br />
        {this.renderExtras()}
        <br />
        {this.renderOut()}
        <br />
        {this.renderNextBall()}
        { this.renderModalForNextBowler() }
      </div>
    );
  }
}

const handlePlayerOut = (props) => {
  if (props.wickets === 9) {
    props.updateWicket();
    setTimeout(() => {
      alert('Game Over!');
    }, 1000);
  } else {
    props.toggleModal();
  }
};

const mapStateToProps = state => ({
  currentOverDetails: state.scoreBoardInformation.overDetails,
  currentOver: state.scoreBoardInformation.team1.overNumber,
  currentBall: state.scoreBoardInformation.team1.ballNumber,
  currentBowler: state.scoreBoardInformation.currentBowler,
  wickets: state.scoreBoardInformation.team1.wickets,
  team1Score: state.scoreBoardInformation.team1,
  team2Score: state.scoreBoardInformation.team2,
  selectedBatsman: state.scoreBoardInformation.selectedBatsman,
  overs: state.gameInformation.numberOfOvers,
  toggleBowlerModal: state.scoreBoardInformation.toggleBowlerModal,
});


const mapDispatchProps = dispatch => ({
  handleCurrentBall: (run, extra, selectedBatsman) => {
    if (run === -1) {
      alert('Please select the run scored for the ball');
      return;
    }
    dispatch(updateOverDetails(run, extra));
    dispatch(updateScoreDetails(run, extra));
    if (selectedBatsman) {
      dispatch(updateStrikerBatsman());
    }
    dispatch(swapBatsman(run));
    dispatch(changeBowlerIfOverCompleted);
    dispatch(resetSelectedPlayerToBlank())
  },
  toggleModal: () => dispatch(toggleModal()),
  toggleBowlerModal: () => dispatch(toggleBowlerModal()),
  updateWicket: () => dispatch(updateWicket()),
});

const connectedBallScore = connect(
  mapStateToProps,
  mapDispatchProps,
)(BallScore);
export default connectedBallScore;
