[![npm version](https://img.shields.io/npm/v/flip-ya-numbers.svg?style=flat-square)](https://www.npmjs.com/package/flip-ya-numbers)
[![npm downloads](https://img.shields.io/npm/dm/flip-ya-numbers.svg?style=flat-square)](https://www.npmjs.com/package/flip-ya-numbers)
[![npm](https://img.shields.io/npm/dt/flip-ya-numbers.svg?style=flat-square)](https://www.npmjs.com/package/flip-ya-numbers)
[![npm](https://img.shields.io/npm/l/flip-ya-numbers.svg?style=flat-square)](https://www.npmjs.com/package/flip-ya-numbers)

> **Make number animation looks sexy** :clap:

Features:

* Flip your nubmer in 3D space
* Super easy to use

## Install

    $ yarn add flip-ya-numbers
    or
    $ npm install flip-ya-numbers -S


<p align="center">
    <img width="300" src="https://raw.githubusercontent.com/bluebill1049/flip-ya-numbers/master/flip-ya-numbers.gif" alt="Flip your number" />
</p>


## Quick start

    import react from 'react';
    import FlipNumbers from 'flip-ya-numbers';

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
| `height`              | number |    ✓      | Individual number height |
| `width`              | number |    ✓      | Individual number width |
| `color`              | string |     ✓     | Number color |
| `background`              | string |    ✓      | Background color |
| `perspective`              | number |          | Css 3D transition perspective |
| `durationSeconds`              | number |          |  |
| `delaySeconds`              | number |          |  |
| `startAnimation`              | boolean |     ✓     | Start the animation |
