import React, { Component } from 'react';
import RLink from 'react-router-dom/Link';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { setTeam1Name, setTeam2Name, setNumberOfOvers } from './actions';

class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team1Name: 'Team1',
      team2Name: 'Team2',
      numberOfOvers: 1,
    };
  }

  setTeam1Name(value) {
    this.setState({ team1Name: value });
  }
  setTeam2Name(value) {
    this.setState({ team2Name: value });
  }
  setNumberOfOvers(value) {
    this.setState({ numberOfOvers: Number(value) });
  }

  render() {
    return (
      <div>
        <center>
          <Col sm={{ size: 10 }}>
            <h4>Enter the game details</h4>
          </Col>
          <Form>
            <FormGroup style={{ width: '200px' }}>
              <Label for="teamName1">Team 1 Name</Label>
              <Input
                name="teamName2"
                id="teamName1"
                onChange={event => this.setTeam1Name(event.target.value)}
              />
            </FormGroup>
            <FormGroup style={{ width: '200px' }}>
              <Label for="teamName2">Team 2 Name</Label>
              <Input
                name="teamName2"
                id="teamName2"
                onChange={event => this.setTeam2Name(event.target.value)}
              />
            </FormGroup>
            <FormGroup style={{ width: '200px' }}>
              <Label for="numberOfOver">Number of Overs</Label>
              <Input
                name="numberOfOver"
                id="numberOfOvers"
                type="number"
                onChange={event => this.setNumberOfOvers(event.target.value)}
              />
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10 }}>
                {/* <Button>Submit Game Details</Button> */}
                <RLink
                  className="btn btn-primary"
                  to="/playerDetails"
                  onClick={() =>
                    this.props.submitGameDetails(
                      this.state.team1Name,
                      this.state.team2Name,
                      this.state.numberOfOvers,
                    )
                  }
                >
                  {' '}
                  Submit Game Details{' '}
                </RLink>
              </Col>
            </FormGroup>
          </Form>
        </center>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitGameDetails: (team1, team2, overs) => {
    dispatch(setNumberOfOvers(overs));
    dispatch(setTeam1Name(team1));
    dispatch(setTeam2Name(team2));
  },
});

export default connect(
  undefined,
  mapDispatchToProps,
)(NewGame);
