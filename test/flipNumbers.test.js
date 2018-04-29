import renderer from 'react-test-renderer';
import FlipNumbers from 'universal/components/flipNumbers/flipNumbers';

jest.mock('./flipNumber', () => 'FlipNumber');

describe('FlipNumbers', () => {
  const props = {
    numbersToDisplay: '00:00',
    breakCharacterClassName: ':',
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
