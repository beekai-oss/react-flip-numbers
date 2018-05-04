// @flow
import debounce from 'lodash/debounce';
import Animate from 'react-simple-animate';
import React from 'react';

const commonAnimateStyle = {
  position: 'absolute',
  height: '100%',
  transformStyle: 'preserve-3d',
};
const easeType = 'cubic-bezier(0.19, 1, 0.22, 1)';
const revolutionDegrees = 360;
const resetRouteCounter = 1000;
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rotateDegreePerNumber = 36;

type PropTypes = {
  position: number,
  length: number,
  height: number,
  color: string,
  background: string,
  width: number,
  perspective: number,
  durationSeconds: number,
  activeNumber: number,
  delaySeconds: number,
  startAnimation: boolean,
};

type StateTypes = {
  degree: number,
  isStatic: boolean,
};

let rotateCounter = 0;

export default class FlipNumber extends React.Component<PropTypes, StateTypes> {
  state = {
    degree: 0,
    isStatic: false,
  };

  componentDidMount() {
    this.updateNumberTimeout = setTimeout(() => this.updateNumber(this.props.activeNumber), 50 * this.props.position);
  }

  componentWillReceiveProps({ activeNumber }: PropTypes) {
    this.updateNumber(activeNumber);
  }

  shouldComponentUpdate(nextProps: PropTypes, nextState: StateTypes) {
    return (
      nextProps.activeNumber !== this.props.activeNumber ||
      this.state.degree === 0 ||
      nextProps.startAnimation !== this.props.startAnimation ||
      nextState.isStatic !== this.state.isStatic
    );
  }

  componentWillUnmount() {
    clearTimeout(this.updateNumberTimeout);
    this.makeStatic.cancel();
  }

  updateNumberTimeout: TimeoutID;

  makeStatic = debounce(() => {
    this.setState({ isStatic: true });
  }, this.props.durationSeconds * 1000);

  makeDynamic = () => {
    this.setState({ isStatic: false });
  };

  updateNumber = (activeNumber: number) => {
    this.makeDynamic();
    this.setState(() => {
      const animateDegree = numbers.findIndex(v => v === activeNumber) * rotateDegreePerNumber;

      if (activeNumber === 0) {
        rotateCounter = rotateCounter > resetRouteCounter ? 0 : rotateCounter + 1;
      }

      return {
        degree: (rotateCounter * revolutionDegrees) - animateDegree,
      };
    }, this.makeStatic);
  };

  render() {
    const {
      activeNumber,
      height,
      color,
      background,
      width,
      perspective,
      durationSeconds,
      startAnimation,
      delaySeconds,
      length,
      position,
    } = this.props;
    const { degree, isStatic } = this.state;
    const viewPortSize = {
      width: `${width}px`,
      height: `${height + 3}px`,
    };
    const translateZ = (height / 2) + height;

    return (
      <span
        style={{
          ...viewPortSize,
          perspective,
          overflow: 'hidden',
          display: 'inline-block',
          textAlign: 'left',
          height,
        }}
      >
        <Animate
          tag="span"
          startAnimation={startAnimation}
          startStyle={{
            ...commonAnimateStyle,
          }}
          endStyle={{
            ...commonAnimateStyle,
            transform: `rotateX(${degree}deg)`,
          }}
          {...{ easeType, durationSeconds, delaySeconds }}
        >
          {numbers.map((n, i) => (
            <span
              style={{
                ...viewPortSize,
                height,
                lineHeight: `${height}px`,
                fontSize: `${height - 1}px`,
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                WebkitFontSmoothing: 'antialiased',
                color,
                background,
                transform: `rotateX(${rotateDegreePerNumber * i}deg) translateZ(${translateZ}px)`,
              }}
              key={`${rotateDegreePerNumber * i}`}
            >
              {n}
            </span>
          ))}
        </Animate>

        <span
          data={length - position}
          style={{
            ...viewPortSize,
            height,
            lineHeight: `${height}px`,
            fontSize: `${height - 1}px`,
            left: `${length - position > 4 ? 0.25 : 0}px`, // hacky fix for weird misalignment in Chrome.
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            WebkitFontSmoothing: 'antialiased',
            color,
            background,
            transform: `rotateX(0deg) translateZ(${translateZ}px)`,
            visibility: isStatic ? 'visible' : 'hidden',
          }}
        >
          {activeNumber}
        </span>
      </span>
    );
  }
}
