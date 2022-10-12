declare module 'react-flip-numbers' {
  import type React from 'react';

  export interface FlipNumbersProps {
    background?: string;
    color: string;
    delay?: number;
    duration?: number;
    height: number;
    nonNumberStyles?: React.CSSProperties;
    numbers: string;
    numberStyles?: React.CSSProperties;
    perspective?: number;
    play: boolean;
    width: number;
  }

  export default class FlipNumbers extends React.Component<FlipNumbersProps> {}
}
