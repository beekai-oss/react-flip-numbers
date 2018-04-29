// @flow
import FlipNumber from './flipNumber';

type PropTypes = {
  numbersToDisplay: string | Array<string>,
  breakCharacterClassName: string,
  height: number,
  width: number,
  color: string,
  background: string,
  perspective: number,
  durationSeconds?: number,
  delaySeconds?: number,
  animate?: boolean,
  startAnimation?: boolean,
};

export default function flipNumbers({
  numbersToDisplay,
  breakCharacterClassName,
  height,
  width,
  color,
  background,
  perspective,
  durationSeconds,
  animate = true,
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
      {Array.from(numbersToDisplay).map((n, key) => {
        const nonNumber = (
          <span className={breakCharacterClassName} key={key}>
            {n}
          </span>
        );

        if (animate) {
          return !isNaN(n) ? (
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
              position={numberCounter++}
              length={numbersToDisplay.length}
              activeNumber={parseInt(n, 10)}
            />
          ) : (
            nonNumber
          );
        }

        return !isNaN(n) ? (
          <span
            style={{
              padding: 0,
            }}
            className={breakCharacterClassName}
            key={key}
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
