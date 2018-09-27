import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { updateSelectedPlayer, resetModalStatesForBatsman } from '../scorer/actions';
import { toggleModal, changeCurrentBowler } from '../scorer/actions';
import SelectBatsman from '../scorer/SelectBatsman';
import SelectBowler from '../scorer/SelectBowler';

class DropDownModal extends Component {
  render() {
    if (!this.props.toggleModal) {
      return null;
    }
    return (
      <Modal
        isOpen={this.props.toggleModal && this.props.wickets < 10}
        toggle={this.props.toggleModalAction}
      >
        <ModalHeader toggle={this.props.toggleModalAction}>Select Player</ModalHeader>
        <ModalBody>{this.props.batsman ? <SelectBatsman /> : <SelectBowler />}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() =>
              (this.props.batsman
                ? this.props.updateSelectedPlayer(this.props.selectedBatsman)
                : this.props.changeCurrentBowler(this.props.selectedBowler))
            }
          >
            Select
          </Button>
          <Button color="secondary" onClick={this.props.toggleModalAction}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resetModalStatesForBatsman: () => dispatch(resetModalStatesForBatsman()),
  updateSelectedPlayer: batsmanName => dispatch(updateSelectedPlayer(batsmanName)),
  changeCurrentBowler: name => dispatch(changeCurrentBowler(name)),
});

const mapStateToProps = state => ({
  selectedBatsman: state.scoreBoardInformation.selectedBatsman,
  toggleModal: state.scoreBoardInformation.toggleModal,
  wickets: state.scoreBoardInformation.team1.wickets,
  selectedBowler: state.scoreBoardInformation.selectedBowler,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropDownModal);
