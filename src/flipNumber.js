// @flow
import { Animate } from 'react-simple-animate';
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

type Props = {
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
  play: boolean,
  numberStyle: { [string]: string | number },
};

type State = {
  degree: number,
  rotateCounter: number,
};

const calculateDegrees = (rotateCounter, activeNumber) => {
  const animateDegree = numbers.findIndex(v => v === activeNumber) * rotateDegreePerNumber;
  const amountDegree = rotateCounter * revolutionDegrees;

  return {
    ...(activeNumber === 0
      ? {
        rotateCounter: rotateCounter > resetRouteCounter ? 0 : rotateCounter + 1,
      }
      : null),
    degree: amountDegree - animateDegree,
  };
};

export default class FlipNumber extends React.Component<Props, State> {
  static getDerivedStateFromProps({ activeNumber }: Props, { rotateCounter }: State) {
    return calculateDegrees(rotateCounter, activeNumber);
  }

  state = {
    degree: 0,
    rotateCounter: 0, // eslint-disable-line react/no-unused-state
  };

  componentDidMount() {
    this.updateNumberTimeout = setTimeout(() => this.updateNumber(), 50 * this.props.position);
  }

  shouldComponentUpdate(nextProps: Props) {
    return (
      nextProps.activeNumber !== this.props.activeNumber ||
      this.state.degree === 0 ||
      nextProps.play !== this.props.play
    );
  }

  componentWillUnmount() {
    clearTimeout(this.updateNumberTimeout);
  }

  updateNumberTimeout: TimeoutID;

  updateNumber = () => {
    this.setState(({ rotateCounter }) => calculateDegrees(rotateCounter, this.props.activeNumber));
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
      play,
      delaySeconds,
      length,
      position,
      numberStyle = {},
    } = this.props;
    const { degree } = this.state;
    const viewPortSize = {
      width: `${width}px`,
      height: `${height + 3}px`,
    };
    const halfElementHeight = height / 2;
    const translateZ = halfElementHeight + height;

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
          play={play}
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
                ...numberStyle,
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
            visibility: 'hidden',
            ...numberStyle,
          }}
        >
          {activeNumber}
        </span>
      </span>
    );
  }
}
