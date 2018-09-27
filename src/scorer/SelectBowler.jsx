import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { toggleBowlerDropDownList, changeCurrentBowler } from './actions';

const SelectBowler = props => (
  <div>
    <Dropdown isOpen={props.toggleBowlerDropDown} toggle={props.toggleBowlerDropDownList}>
      <DropdownToggle caret>Select next Bowler</DropdownToggle>
      <DropdownMenu>
        {props.bowlerList.filter(bowler => bowler !== props.currentBowler).map(bowler => (
          <DropdownItem key={bowler} onClick={() => props.changeCurrentBowler(bowler)}>
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
});

const mapDispatchToProps = dispatch => ({
  toggleBowlerDropDownList: () => dispatch(toggleBowlerDropDownList()),
  changeCurrentBowler: name => dispatch(changeCurrentBowler(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectBowler);
