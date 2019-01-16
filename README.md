[![Coverage Status](https://coveralls.io/repos/github/bluebill1049/react-flip-numbers/badge.svg?branch=master)](https://coveralls.io/github/bluebill1049/react-flip-numbers?branch=master)
[![npm version](https://img.shields.io/npm/v/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)
[![npm downloads](https://img.shields.io/npm/dm/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)
[![npm](https://img.shields.io/npm/dt/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)
[![npm](https://img.shields.io/npm/l/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)

> **Make number animation looks sexy** :clap:

Features:

- Flip your numbers in 3D space
- Super easy to use

## Install

    $ yarn add react-flip-numbers
    or
    $ npm install react-flip-numbers -S

<p align="center">
    <img width="300" src="https://raw.githubusercontent.com/bluebill1049/react-flip-numbers/master/flip-ya-numbers.gif" alt="Flip your number" />
</p>

## Quickstart

```jsx
import react from 'react';
import FlipNumbers from 'react-flip-numbers';

export default () => {
  return (
    <FlipNumbers
      height={12}
      width={12}
      color="red"
      background="white"
      play
      perspective={100}
      numbers="12345"
      numberStyle={{ color: 'black' }}
    />
  );
};
```

## API

| Prop              | Type    | Required | Description                              |
| :---------------- | :------ | :------: | :--------------------------------------- |
| `numbers`         | string  |    ✓     |                                          |
| `nonNumberStyle`  | string  |          | Css inline style for not number eg , : . |
| `numberStyle`     | string  |          | Css inline style for number              |
| `height`          | number  |    ✓     | Individual number height                 |
| `width`           | number  |    ✓     | Individual number width                  |
| `color`           | string  |    ✓     | Number color                             |
| `background`      | string  |    ✓     | Background color                         |
| `perspective`     | number  |          | Css 3D transition perspective            |
| `durationSeconds` | number  |          |                                          |
| `delaySeconds`    | number  |          |                                          |
| `play`            | boolean |    ✓     | Start the animation                      |
