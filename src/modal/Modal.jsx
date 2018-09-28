import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
  updateSelectedPlayer,
  resetModalStatesForBatsman,
  toggleModal,
  changeCurrentBowler,
  toggleBowlerModal
} from '../scorer/actions';
import SelectBatsman from '../scorer/SelectBatsman';
import SelectBowler from '../scorer/SelectBowler';

class DropDownModal extends Component {
  renderButtonsForBatsman() {
    return (
      <ModalFooter>
        {this.props.selectedBatsman !== '' ? (
          <Button
            color="primary"
            onClick={() => this.props.updateSelectedPlayer(this.props.selectedBatsman)}
          >
            Select
          </Button>
        ) : (
          <Button color="primary" disabled>
            Select
          </Button>
        )}
        <Button color="secondary" onClick={() => this.props.resetModalStatesForBatsman()}>
          Cancel
        </Button>
      </ModalFooter>
    );
  }

  renderButtonsForBowler() {
    return (
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => this.props.changeCurrentBowler(this.props.selectedBowler)}
        >
          Select
        </Button>
        <Button color="secondary" onClick={this.props.toggleBowlerModalAction}>
          Cancel
        </Button>
      </ModalFooter>
    );
  }
  render() {
    const toggleModalBool = this.props.batsman
      ? this.props.toggleModal
      : this.props.toggleBowlerModal;
    console.log(`Modal Bool ${toggleModalBool}`);

    if (!toggleModalBool) {
      console.log('Render Null');
      return null;
    }
    return (
      <Modal
        isOpen={toggleModalBool && this.props.wickets < 10}
        toggle={
          this.props.batsman ? this.props.toggleModalAction : this.props.toggleBowlerModalAction
        }
      >
        <ModalHeader
          toggle={
            this.props.batsman ? this.props.toggleModalAction : this.props.toggleBowlerModalAction
          }
        >
          Select Player
        </ModalHeader>
        <ModalBody>{this.props.batsman ? <SelectBatsman /> : <SelectBowler />}</ModalBody>
        {this.props.batsman ? this.renderButtonsForBatsman() : this.renderButtonsForBowler()}
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModalAction: () => dispatch(toggleModal()),
  resetModalStatesForBatsman: () => dispatch(resetModalStatesForBatsman()),
  updateSelectedPlayer: batsmanName => dispatch(updateSelectedPlayer(batsmanName)),
  changeCurrentBowler: name => dispatch(changeCurrentBowler(name)),
  toggleBowlerModalAction: () => dispatch(toggleBowlerModal())
});

const mapStateToProps = state => ({
  selectedBatsman: state.scoreBoardInformation.selectedBatsman,
  toggleModal: state.scoreBoardInformation.toggleModal,
  wickets: state.scoreBoardInformation.team1.wickets,
  selectedBowler: state.scoreBoardInformation.selectedBowler,
  toggleBowlerModal: state.scoreBoardInformation.toggleBowlerModal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDownModal);
