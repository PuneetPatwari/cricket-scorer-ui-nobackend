import reducer from './reducer';
import { setBatmensList, setBowllerList } from './actions';

describe('gameInformation/reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      team1Players: [
        'Player1.1',
        'Player1.2',
        'Player1.3',
        'Player1.4',
        'Player1.5',
        'Player1.6',
        'Player1.7',
        'Player1.8',
        'Player1.9',
        'Player1.10',
        'Player1.11',
      ],
      team2Players: [
        'Player2.1',
        'Player2.2',
        'Player2.3',
        'Player2.4',
        'Player2.5',
        'Player2.6',
        'Player2.7',
        'Player2.8',
        'Player2.9',
        'Player2.10',
        'Player2.11',
      ],
      numberOfOvers: 5,
    };
  });
  it('should return initial state of 11 players in each team', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('updating the player list', () => {
    const batsmanList = [
      {
        name: 'Sachin',
        yetToBat: false,
      },
      {
        name: 'Sehwag',
        yetToBat: false,
      },
      {
        name: 'Virat',
        yetToBat: true,
      },
      {
        name: 'Rohit',
        yetToBat: true,
      },
      {
        name: 'Rahul',
        yetToBat: true,
      },
      {
        name: 'Ramesh',
        yetToBat: true,
      },
      {
        name: 'Kapil',
        yetToBat: true,
      },
      {
        name: 'MS Dhoni',
        yetToBat: true,
      },
      {
        name: 'Yuvraj',
        yetToBat: true,
      },
      {
        name: 'Irfan',
        yetToBat: true,
      },
      {
        name: 'Zaheer',
        yetToBat: true,
      },
    ];
    const tempState = reducer(initialState, setBatmensList(batsmanList));
    expect(tempState.team1Players[0]).toEqual('Sachin');
    expect(tempState.team1Players[1]).toEqual('Sehwag');
  });

  it('updating the bolwer list', () => {
    const bolwerList = [
      {
        name: 'Akshay',
      },
      {
        name: 'Puneet',
      },
      {
        name: 'Virat',
      },
      {
        name: 'Rohit',
      },
      {
        name: 'Rahul',
      },
      {
        name: 'Ramesh',
      },
      {
        name: 'Kapil',
      },
      {
        name: 'MS Dhoni',
      },
      {
        name: 'Yuvraj',
      },
      {
        name: 'Irfan',
      },
      {
        name: 'Zaheer',
      },
    ];
    const tempState = reducer(initialState, setBowllerList(bolwerList));
    expect(tempState.team2Players[0]).toEqual('Akshay');
    expect(tempState.team2Players[1]).toEqual('Puneet');
  });
});
