import React, { Component } from 'react';
import { Container, Col, Button, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { updateOverDetails, updateScoreDetails, swapBatsman, changeBowlerIfOverCompleted, toggleModal, updateStrikerBatsman, updateWicket } from './actions';
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
      modal: true,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  onNextBallClick(run, extra) {
    this.props.handleCurrentBall(run, extra);
    this.resetRun();
    this.resetExtra();
  }
  setRun(e) {
    this.setState({ run: Number(e.target.value) });
  }
  setExtra(e) {
    this.setState({ extra: this.state.extra === e.target.value ? '' : e.target.value });
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
  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }
  renderRuns() {
    const rows = [];
    for (let i = 0; i < 8; i += 1) {
      rows.push(<Button
        className={`run-button ${i === this.state.run ? 'bg-blue' : ''}`}
        key={i}
        value={i}
        onClick={event => this.setRun(event)}
        color="primary"
      >
        {'  '}
        {i}{'  '}
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
            <Col style={{ textAlign: 'left' }} >
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
        <Col style={{ textAlign: 'center' }}>
          <Button color="danger" onClick={() => handlePlayerOut(this.props)}> Out </Button>
          <DropDownModal batsman={true} />
        </Col>
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
            onClick={() => this.onNextBallClick(this.state.run, this.state.extra)}
           // If out is pressed make the batsman empty and do all action for next ball click followed by modal display
          >
            Next Ball
          </Button>
        </Col>
      </Container>
    );
  }

  renderModalForNextBowler() {
    if (this.state.isOut) {
      return (
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>

      );
    }
    return (
      <div />
    );
  }
  render() {
    return (
      <div>
        {this.renderRuns()}
        <br />
        {this.renderExtras()}
        <br />
        {this.renderOut()}
        <br />
        {this.renderNextBall()}
        {this.renderModalForNextBowler()}
        {/* <button onClick={() => this.onNextBallClick(this.state.run)}>Next ball</button> */}
      </div>
    );
  }
}

const handlePlayerOut = props => {
  if (props.wickets === 9) {
    props.updateWicket();
    setTimeout(() => {
      alert('Game Over!');
    }, 1000);
  } else {
    props.toggleModal();
  }
}

const mapStateToProps = state => ({
  currentOverDetails: state.scoreBoardInformation.overDetails,
  currentOver: state.scoreBoardInformation.team1.overNumber,
  currentBall: state.scoreBoardInformation.team1.ballNumber,
  currentBowler: state.scoreBoardInformation.currentBowler,
  wickets: state.scoreBoardInformation.team1.wickets,
});


const mapDispatchProps = dispatch => ({
  handleCurrentBall: (run, extra) => {
    if (run === -1) {
      alert('Please select the run scored for the ball');
      return;
    }
    dispatch(updateOverDetails(run, extra));
    dispatch(updateScoreDetails(run, extra));
    dispatch(updateStrikerBatsman());
    dispatch(swapBatsman(run));
    dispatch(changeBowlerIfOverCompleted);
  },
  toggleModal: () => dispatch(toggleModal()),
  updateWicket: () => dispatch(updateWicket()),
});

const connectedBallScore = connect(
  mapStateToProps,
  mapDispatchProps,
)(BallScore);
export default connectedBallScore;
