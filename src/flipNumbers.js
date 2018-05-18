// @flow
import FlipNumber from './flipNumber';
import React from 'react';

type PropTypes = {
  numbers: string | Array<string>,
  nonNumberStyle?: { [string]: string | number },
  height: number,
  width: number,
  color: string,
  background: string,
  perspective?: number,
  durationSeconds?: number,
  delaySeconds?: number,
  animate?: boolean,
  startAnimation?: boolean
};

export default class FlipNumbers extends React.Component<PropTypes> {
  static defaultProps = {
    perspective: 500,
    durationSeconds: 0.3,
    animate: true,
    startAnimation: false,
    delaySeconds: 0,
    nonNumberStyle: {},
  };

  shouldComponentUpdate(nextProps: PropTypes) {
    return (
      nextProps.numbers !== this.props.numbers ||
      nextProps.durationSeconds !== this.props.durationSeconds ||
      nextProps.delaySeconds !== this.props.delaySeconds ||
      nextProps.startAnimation !== this.props.startAnimation
    );
  }

  render() {
    const {
      numbers,
      nonNumberStyle,
      height,
      width,
      color,
      background,
      perspective,
      durationSeconds,
      animate,
      startAnimation,
      delaySeconds,
    } = this.props;
    let numberCounter = 0;

    return (
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {Array.from(numbers).map((n, key) => {
          const nonNumber = (
            <span style={nonNumberStyle} key={numberCounter}>
              {n}
            </span>
          );

          if (animate) {
            numberCounter += 1;
            return !Number.isNaN(parseInt(n, 10)) ? (
              <FlipNumber
                {...{
                  key,
                  height,
                  width,
                  color,
                  background,
                  perspective,
                  durationSeconds,
                  startAnimation,
                  delaySeconds,
                }}
                position={numberCounter}
                length={numbers.length}
                activeNumber={parseInt(n, 10)}
              />
            ) : (
              nonNumber
            );
          }

          return !Number.isNaN(parseInt(n, 10)) ? (
            <span
              style={{
                padding: 0,
              }}
              className={nonNumberStyle}
              key={numberCounter}
            >
              {n}
            </span>
          ) : (
            nonNumber
          );
        })}
      </section>
    );
  }
}
