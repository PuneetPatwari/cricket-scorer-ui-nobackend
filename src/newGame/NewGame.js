import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { setTeam1Name, setTeam2Name, setNumberOfOvers } from '../home/actions';

const NewGame = props => (
  <div>
    <Col sm={{ size: 10, offset: 2 }}>
      <h4>Enter the game details</h4>
    </Col>
    <Form>
      <FormGroup>
        <Label for="teamName1">Team 1 Name</Label>
        <Input name="teamName2" id="teamName1" onClick={props.setTeam1NameAction} />
      </FormGroup>
      <FormGroup>
        <Label for="teamName2">Team 2 Name</Label>
        <Input name="teamName2" id="teamName2" onClick={props.setTeam2NameAction} />
      </FormGroup>
      <FormGroup>
        <Label for="numberOfOver">Number of Overs</Label>
        <Input
          name="numberOfOver"
          id="numberOfOvers"
          type="number"
          onClick={props.setNumberOfOversAction}
        />
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit Game Details</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setTeam1NameAction: () => dispatch(setTeam1Name()),
  setTeam2NameAction: () => dispatch(setTeam2Name()),
  setNumberOfOversAction: () => dispatch(setNumberOfOvers()),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(NewGame);
