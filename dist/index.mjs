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

// src/sum.ts
var sum = (a, b) => {
  return a + b;
};

// src/log.ts
var log = () => {
  console.log("version 1");
};

export { Button, log, sum };
//# sourceMappingURL=index.mjs.map