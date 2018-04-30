// @flow
import FlipNumber from './flipNumber';
import React from 'react';

type PropTypes = {
  numbers: string | Array<string>,
  nonNumberStyle: string,
  height: number,
  width: number,
  color: string,
  background: string,
  perspective?: number,
  durationSeconds?: number,
  delaySeconds?: number,
  animate?: boolean,
  startAnimation?: boolean,
};

export default function FlipNumbers({
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
}: PropTypes) {
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

FlipNumbers.defaultProps = {
  perspective: 500,
  durationSeconds: 0.3,
  animate: true,
  startAnimation: false,
  delaySeconds: 0,
};
