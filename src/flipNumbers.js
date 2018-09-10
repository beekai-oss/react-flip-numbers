// @flow
import FlipNumber from './flipNumber';
import React from 'react';

type Props = {
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
  play?: boolean,
  numberStyle: { [string]: string | number },
};

export default class FlipNumbers extends React.Component<Props> {
  static defaultProps = {
    perspective: 500,
    durationSeconds: 0.3,
    animate: true,
    play: false,
    delaySeconds: 0,
    nonNumberStyle: {},
    numberStyle: {},
  };

  shouldComponentUpdate(nextProps: Props) {
    return (
      nextProps.numbers !== this.props.numbers ||
      nextProps.durationSeconds !== this.props.durationSeconds ||
      nextProps.delaySeconds !== this.props.delaySeconds ||
      nextProps.play !== this.props.play
    );
  }

  render() {
    const {
      numbers,
      nonNumberStyle,
      numberStyle,
      height,
      width,
      color,
      background,
      perspective,
      durationSeconds,
      animate,
      play,
      delaySeconds,
    } = this.props;
    let numberCounter = 0;

    return (
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
                  play,
                  delaySeconds,
                  numberStyle,
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
