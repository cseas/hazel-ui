import type { CSSProperties } from "react";
import { ControlProps } from "react-select";
import { Color, Shadow } from "../../../foundation";

export const controlStyles: any = (
  base: CSSProperties,
  state: ControlProps<{}, boolean>
) => ({
  ...base,
  height: "3.2rem",

  border: `0.1rem solid ${state.theme.colors.neutral30}`, // control border
  borderRadius: "0.3rem",
  backgroundColor: state.isFocused ? Color.gray5 : state.theme.colors.neutral0,
  boxShadow: state.isFocused ? Shadow.xs : "none",

  cursor: "pointer",
});
