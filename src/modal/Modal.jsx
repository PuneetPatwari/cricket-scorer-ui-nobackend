import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { updateSelectedPlayer, toggleModal } from '../scorer/actions';
import SelectBatsman from '../scorer/SelectBatsman';

class DropDownModal extends Component {
  render() {
    if (!this.props.toggleModal) {
      return null;
    } else {
      return (
        <Modal isOpen={this.props.toggleModal && this.props.wickets < 10} toggle={this.props.toggleModalAction} >
          <ModalHeader toggle={this.props.toggleModalAction}>Select Player</ModalHeader>
          <ModalBody>
            {this.props.batsman ? <SelectBatsman /> : null}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.updateSelectedPlayer(this.props.selectedBatsman)}>Select</Button>
            <Button color="secondary" onClick={this.props.toggleModalAction}>Cancel</Button>
          </ModalFooter>
        </Modal >
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModalAction: () => dispatch(toggleModal()),
  updateSelectedPlayer: batsmanName => dispatch(updateSelectedPlayer(batsmanName)),
});

const mapStateToProps = state => ({
  selectedBatsman: state.scoreBoardInformation.selectedBatsman,
  toggleModal: state.scoreBoardInformation.toggleModal,
  wickets: state.scoreBoardInformation.team1.wickets,
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownModal);
