[![npm version](https://img.shields.io/npm/v/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)
[![npm downloads](https://img.shields.io/npm/dm/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)
[![npm](https://img.shields.io/npm/dt/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)
[![npm](https://img.shields.io/npm/l/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)

> **Make number animation looks sexy** :clap:

Features:

* Flip your nubmer in 3D space
* Super easy to use

## Install

    $ yarn add react-flip-numbers
    or
    $ npm install react-flip-numbers -S


<p align="center">
    <img width="300" src="https://raw.githubusercontent.com/bluebill1049/flip-ya-numbers/master/flip-ya-numbers.gif" alt="Flip your number" />
</p>


## Quick start

    import react from 'react';
    import FlipNumbers from 'react-flip-numbers';

    export default function SexyComponent(props) {
        return <div>
            <FlipNumbers
                height="12px"
                width="12px"
                color="red"
                background="white"
                startAnimation
                numbers="12345"
                numberStyle={{ color: "black" }}
          />
        </div>;
    }

## API

| Prop                  | Type     | Required | Description                                                                            |
| :-------------------- | :------- | :------: | :------------------------------------------------------------------------------------- |
| `numbers`      | string  |    ✓     |                                  |
| `nonNumberStyle`            | string    |          | Css inline style for not number eg , : . |
| `numberStyle`            | string    |          | Css inline style for number |
| `height`              | number |    ✓      | Individual number height |
| `width`              | number |    ✓      | Individual number width |
| `color`              | string |     ✓     | Number color |
| `background`              | string |    ✓      | Background color |
| `perspective`              | number |          | Css 3D transition perspective |
| `durationSeconds`              | number |          |  |
| `delaySeconds`              | number |          |  |
| `startAnimation`              | boolean |     ✓     | Start the animation |
