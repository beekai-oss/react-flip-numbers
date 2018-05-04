[![npm version](https://img.shields.io/npm/v/flip-your-number.svg?style=flat-square)](https://www.npmjs.com/package/flip-your-number)
[![npm downloads](https://img.shields.io/npm/dm/flip-your-number.svg?style=flat-square)](https://www.npmjs.com/package/flip-your-number)
[![npm](https://img.shields.io/npm/dt/flip-your-number.svg?style=flat-square)](https://www.npmjs.com/package/flip-your-number)
[![npm](https://img.shields.io/npm/l/flip-your-number.svg?style=flat-square)](https://www.npmjs.com/package/flip-your-number)

> **Make number animation looks sexy** :clap:

Features:

* Flip your nubmer in 3D space
* Super easy to use

## Install

    $ yarn add flip-your-number
    or
    $ npm install flip-your-number -S


<p align="center">
    <img width="200" src="https://raw.githubusercontent.com/bluebill1049/flip-your-number/master/example/flip-your-number.gif" alt="Flip your number" />
</p>


## Quick start

    import react from 'react';
    import FlipNumbers from 'flip-your-number';

    export default function SexyComponent(props) {
        return <div>
            <FlipNumbers
                height="12px"
                width="12px"
                color="red"
                background="white"
                startAnimation
                numbersToDisplay"12345"
          />
        </div>;
    }

## API

| Prop                  | Type     | Required | Description                                                                            |
| :-------------------- | :------- | :------: | :------------------------------------------------------------------------------------- |
| `numbers`      | string  |    ✓     |                                  |
| `nonNumberStyle`            | string    |          | Css inline style for not number eg , : . |
| `height`              | number |    ✓      | Individual number height |
| `width`              | number |    ✓      | Individual number width |
| `color`              | string |     ✓     | Number color |
| `background`              | string |    ✓      | Background color |
| `perspective`              | number |          | Css 3D transition perspective |
| `durationSeconds`              | number |          |  |
| `delaySeconds`              | number |          |  |
| `startAnimation`              | boolean |     ✓     | Start the animation |
