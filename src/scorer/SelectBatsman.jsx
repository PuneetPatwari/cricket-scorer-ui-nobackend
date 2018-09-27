import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { toggleBatsmanDropDownList, selectNextPlayer } from './actions';

const SelectBatsman = props => {
  return (
    <div>
      <Dropdown isOpen={props.toggleBatsmanDropDown} toggle={props.toggleBatsmanDropDownList}>
        <DropdownToggle caret>Select next Batsman</DropdownToggle>
        <DropdownMenu>
          {props.yetToBatBatsmanList.filter(x => x.yetToBat).map(x => (
            <DropdownItem key={x.name} onClick={() => props.selectNextPlayer(x.name)} >{x.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
};

const mapStateToProps = state => ({
  yetToBatBatsmanList: state.scoreBoardInformation.team1.batsmanList,
  toggleBatsmanDropDown: state.scoreBoardInformation.toggleBatsmanDropDown,
  selectedBatsman: state.scoreBoardInformation.selectedBatsman,
});

const mapDispatchToProps = dispatch => ({
  toggleBatsmanDropDownList: () => dispatch(toggleBatsmanDropDownList()),
  selectNextPlayer: name => dispatch(selectNextPlayer(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBatsman);
