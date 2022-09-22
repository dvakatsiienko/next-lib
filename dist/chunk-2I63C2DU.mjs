import { jsx } from 'react/jsx-runtime';

// src/Button.tsx
var Button = (props) => {
  return /* @__PURE__ */ jsx("button", {
    type: props.type,
    children: props.children
  });
};
Button.defaultProps = {
  children: "Click",
  type: "button"
};
var sum = (a, b) => {
  return a + b;
};
var Button_default = Button;

export { Button, Button_default, sum };
//# sourceMappingURL=chunk-2I63C2DU.mjs.map