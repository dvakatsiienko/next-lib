'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

// src/Button.tsx
var Button = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx("button", {
    type: props.type,
    children: props.children
  });
};
Button.defaultProps = {
  children: "Click",
  type: "button"
};

// src/sum.ts
var sum = (a, b) => {
  return a + b;
};

// src/log.ts
var log = () => {
  console.log("version 1");
};

exports.Button = Button;
exports.log = log;
exports.sum = sum;
//# sourceMappingURL=index.js.map