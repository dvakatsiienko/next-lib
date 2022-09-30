import { jsx as r } from "react/jsx-runtime";
import n from "../node_modules/@mui/material/esm/styles/styled.js";
const t = (o) => /* @__PURE__ */ r(l, {
  $variant: o.variant,
  disabled: o.disabled,
  type: o.type,
  onClick: o.onClick,
  children: o.children
});
t.defaultProps = {
  children: "Click",
  type: "button",
  disabled: !1,
  onClick: () => null
};
const l = n("button", {
  shouldForwardProp: (o) => o !== "$variant"
})`
    width: 120px;
    height: 32px;
    border-radius: 4px;
    color: #fff;
    background-color: #1990ff;
    outline: none;
    border: 1px solid currentColor;
    cursor: pointer;

    &:hover {
        background-color: #40a9ff;
    }

    &:disabled {
        background-color: #808080;
        cursor: not-allowed;
    }

    ${(o) => o.$variant === "secondary" && `
        background-color: #4f19ff;

        &:hover {
            background-color: #6b40f8;
        }
    `}
`;
export {
  t as Button,
  t as default
};
//# sourceMappingURL=Button.js.map
