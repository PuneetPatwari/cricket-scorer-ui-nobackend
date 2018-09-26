import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { setTeam1Name, setTeam2Name, setNumberOfOvers } from '../home/actions';

const NewGame = props => (
  <div>
    <Col sm={{ size: 10, offset: 2 }}>
      <h4>Enter the game details</h4>
    </Col>
    <Form>
      <FormGroup>
        <Label for="teamName1">Team 1 Name</Label>
        <Input
          name="teamName2"
          id="teamName1"
          onChange={event => props.setTeam1NameAction(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="teamName2">Team 2 Name</Label>
        <Input
          name="teamName2"
          id="teamName2"
          onChange={event => props.setTeam2NameAction(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="numberOfOver">Number of Overs</Label>
        <Input
          name="numberOfOver"
          id="numberOfOvers"
          type="number"
          onChange={event => props.setNumberOfOversAction(event.target.value)}
        />
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          {/* <Button>Submit Game Details</Button> */}
          <Link className="btn btn-primary" to="/scorer">
            {' '}
            Submit Game Details{' '}
          </Link>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setTeam1NameAction: value => dispatch(setTeam1Name(value)),
  setTeam2NameAction: value => dispatch(setTeam2Name(value)),
  setNumberOfOversAction: value => dispatch(setNumberOfOvers(value)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(NewGame);
