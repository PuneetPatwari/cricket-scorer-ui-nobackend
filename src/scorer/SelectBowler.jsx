import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { toggleBowlerDropDownList, selectBowler } from './actions';

const SelectBowler = props => (
  <div>
    <Dropdown isOpen={props.toggleBowlerDropDown} toggle={props.toggleBowlerDropDownList}>
      <DropdownToggle caret>
        {props.selectedBowler === '' ? 'Select next Bowler' : props.selectedBowler}
      </DropdownToggle>
      <DropdownMenu>
        {props.bowlerList.filter(bowler => bowler !== props.currentBowler).map(bowler => (
          <DropdownItem key={bowler} onClick={() => props.selectBowler(bowler)}>
            {bowler}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  </div>
);

const mapStateToProps = state => ({
  bowlerList: state.gameInformation.team2Players,
  toggleBowlerDropDown: state.scoreBoardInformation.toggleBowlerDropDown,
  currentBowler: state.scoreBoardInformation.currentBowler,
  selectedBowler: state.scoreBoardInformation.selectedBowler,
});

const mapDispatchToProps = dispatch => ({
  toggleBowlerDropDownList: () => dispatch(toggleBowlerDropDownList()),
  selectBowler: name => dispatch(selectBowler(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectBowler);
