import renderer from 'react-test-renderer';
import FlipNumbers from '../src/flipNumbers';
import React from 'react';

jest.mock('../src/flipNumber', () => 'FlipNumber');

describe('FlipNumbers', () => {
  const props = {
    numbers: '00:00',
    nonNumberStyle: ':',
    height: 20,
    width: 20,
    color: 'black',
    background: 'white',
    perspective: '1000px',
    durationSeconds: 0.3,
    delaySeconds: 0.3,
    startAnimation: false,
  };

  it('should render correctly', () => {
    const tree = renderer.create(<FlipNumbers {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
