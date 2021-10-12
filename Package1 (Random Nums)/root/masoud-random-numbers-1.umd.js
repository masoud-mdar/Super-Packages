(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["masoud-random-numbers-1"] = {}));
})(this, (function (exports) { 'use strict';

	var randomiser = function randomiser(start, end) {
	  return Math.floor(Math.random() * (end - start)) + start;
	};

	exports.randomiser = randomiser;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
