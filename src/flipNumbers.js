// @flow
import React from 'react';
import FlipNumber from './flipNumber';

type Props = {
  numbers: string | Array<string>,
  nonNumberStyle?: React.CSSProperites,
  numberClassName?: string,
  nonNumberClassName?: string,
  height: number,
  width: number,
  color: string,
  background?: string,
  perspective?: number,
  duration?: number,
  delay?: number,
  animate?: boolean,
  play?: boolean,
  numberStyle?: { [string]: string | number },
};

export default class FlipNumbers extends React.Component<Props> {
  static defaultProps = {
    perspective: 500,
    duration: 0.3,
    animate: true,
    play: false,
    delay: 0,
    nonNumberStyle: {},
    numberStyle: {},
  };

  shouldComponentUpdate(nextProps: Props) {
    return (
      nextProps.nonNumberClassName !== this.props.nonNumberClassName ||
      nextProps.numberClassName !== this.props.numberClassName ||
      nextProps.numbers !== this.props.numbers ||
      nextProps.height !== this.props.height ||
      nextProps.width !== this.props.width ||
      nextProps.duration !== this.props.duration ||
      nextProps.delay !== this.props.delay ||
      nextProps.play !== this.props.play
    );
  }

  render() {
    const {
      numbers,
      nonNumberStyle,
      numberStyle,
      numberClassName,
      nonNumberClassName,
      height,
      width,
      color,
      background,
      perspective,
      duration,
      animate,
      play,
      delay,
    } = this.props;
    let numberCounter = 0;

    return (
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label={numbers}
      >
        {Array.from(numbers).map((n, key) => {
          const nonNumber = (
            <span aria-hidden style={nonNumberStyle} className={nonNumberClassName} key={numberCounter}>
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
                  duration,
                  play,
                  delay,
                  numberStyle,
                }}
                position={numberCounter}
                length={numbers.length}
                activeNumber={parseInt(n, 10)}
                className={numberClassName}
              />
            ) : (
              nonNumber
            );
          }

          return !Number.isNaN(parseInt(n, 10)) ? (
            <span
              aria-hidden
              style={{
                padding: 0,
              }}
              style={nonNumberStyle}
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
