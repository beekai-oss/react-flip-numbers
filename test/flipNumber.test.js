import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FlipNumber from './flipNumber';

jest.mock('react-simple-animate', () => 'Animate');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('FlipNumber', () => {
  const props = {
    height: 20,
    color: 'white',
    background: 'black',
    numbers,
    width: 20,
    perspective: '1000px',
    durationSeconds: 0.3,
    activeNumber: 0,
    delaySeconds: 0,
    startAnimation: true,
  };

  it('should render correctly', () => {
    const tree = renderer.create(<FlipNumber {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should only update component when active number changed or degree is 0', () => {
    const tree = shallow(<FlipNumber {...props} />);

    const nextProps = {
      ...props,
      activeNumber: 0,
    };

    expect(tree.instance().shouldComponentUpdate(nextProps)).toBeTruthy();

    tree.setState({
      degree: 1,
      isStatic: false,
    });

    const nextState = {
      degree: 1,
      rotateCounter: 0,
      rotateDegreePerNumber: 0,
      isStatic: false,
    };

    expect(tree.instance().shouldComponentUpdate(nextProps, nextState)).toBeFalsy();

    expect(
      tree.instance().shouldComponentUpdate({
        activeNumber: 1,
      })
    ).toBeTruthy();
  });

  it('should return the correct position for matching number', () => {
    const tree = renderer.create(
      <FlipNumber
        {...{
          ...props,
          activeNumber: 2,
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should reset the rotate position when it is been running for 1000 times', () => {
    const tree = shallow(<FlipNumber {...props} />);

    tree.setState({
      rotateCounter: 1001,
    });

    tree.setProps({
      numbers,
      activeNumber: 0,
    });

    expect(tree.state()).toMatchObject({
      rotateCounter: 0,
    });
  });
});
