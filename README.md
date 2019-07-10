# React Flip Numbers

[![Coverage Status](https://coveralls.io/repos/github/bluebill1049/react-flip-numbers/badge.svg?branch=master)](https://coveralls.io/github/bluebill1049/react-flip-numbers?branch=master)
[![npm version](https://img.shields.io/npm/v/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)
[![npm downloads](https://img.shields.io/npm/dm/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)
[![npm](https://img.shields.io/npm/dt/react-flip-numbers.svg?style=flat-square)](https://www.npmjs.com/package/react-flip-numbers)
[![npm](https://badgen.net/bundlephobia/minzip/react-flip-numbers)](https://badgen.net/bundlephobia/minzip/react-flip-numbers)

> **Make number animation looks sexy** :clap:

- Flip your numbers in 3D space
- Super easy to use

## Install

    npm install react-flip-numbers -S

<p align="center">
    <img width="600" src="https://raw.githubusercontent.com/bluebill1049/react-flip-numbers/master/react-flip-numbers.gif" alt="react flip numbers" />
</p>

## Quickstart

```jsx
import react from 'react';
import FlipNumbers from 'react-flip-numbers';

export default () => {
  return <FlipNumbers height={12} width={12} color="red" background="white" play perspective={100} numbers="12345" />;
};
```

## API

| Prop             | Type    | Required | Description                              |
| :--------------- | :------ | :------: | :--------------------------------------- |
| `numbers`        | string  |    ✓     |                                          |
| `play`           | boolean |    ✓     | Start the animation                      |  |
| `height`         | number  |    ✓     | Individual number height                 |
| `width`          | number  |    ✓     | Individual number width                  |
| `color`          | string  |    ✓     | Number color                             |
| `background`     | string  |          | Background color                         |
| `perspective`    | number  |          | Css 3D transition perspective            |
| `nonNumberStyle` | string  |          | Css inline style for not number eg , : . |
| `numberStyle`    | string  |          | Css inline style for number              |
| `duration`       | number  |          |                                          |
| `delay`          | number  |          |                                          |
