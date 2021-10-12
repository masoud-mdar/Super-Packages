'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const randomiser = (start, end) => Math.floor(Math.random() * (end - start)) + start;

exports.randomiser = randomiser;
