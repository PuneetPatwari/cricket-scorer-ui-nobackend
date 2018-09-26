import isStrikerOrNonStriker from './calculateBatsmenDetails';

describe('gameDetails/calculateBatsmenDetails', () => {
  let striker;
  let nonStriker;
  beforeEach(() => {
    striker = 'Sachin';
    nonStriker = 'Sehwag';
  });
  it('isStrikerOrNonStriker should return true if it is striker/nonStriker', () => {
    const batsmenName = 'Sehwag';
    expect(isStrikerOrNonStriker(batsmenName, striker, nonStriker)).toEqual(true);
  });
});
