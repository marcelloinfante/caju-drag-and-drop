import { alpha } from "@mui/material/styles";
import {
  grey,
  common,
  primary,
  info,
  secondary,
  success,
  warning,
  error,
} from "./palette";

export const shadows = {
  z1: `0 1px 2px 0 ${alpha(grey[500], 0.16)}`,
  z4: `0 4px 8px 0 ${alpha(grey[500], 0.16)}`,
  z8: `0 8px 16px 0 ${alpha(grey[500], 0.16)}`,
  z12: `0 12px 24px -4px ${alpha(grey[500], 0.16)}`,
  z16: `0 16px 32px -4px ${alpha(grey[500], 0.16)}`,
  z20: `0 20px 40px -4px ${alpha(grey[500], 0.16)}`,
  z24: `0 24px 48px 0 ${alpha(grey[500], 0.16)}`,
  //
  card: `0 0 2px 0 ${alpha(grey[500], 0.2)}, 0 12px 24px -4px ${alpha(
    grey[500],
    0.12
  )}`,
  dropdown: `0 0 2px 0 ${alpha(grey[500], 0.24)}, -20px 20px 40px -4px ${alpha(
    grey[500],
    0.24
  )}`,
  dialog: `-40px 40px 80px -8px ${alpha(common.black, 0.24)}`,
  //
  primary: `0 8px 16px 0 ${alpha(primary.main, 0.24)}`,
  info: `0 8px 16px 0 ${alpha(info.main, 0.24)}`,
  secondary: `0 8px 16px 0 ${alpha(secondary.main, 0.24)}`,
  success: `0 8px 16px 0 ${alpha(success.main, 0.24)}`,
  warning: `0 8px 16px 0 ${alpha(warning.main, 0.24)}`,
  error: `0 8px 16px 0 ${alpha(error.main, 0.24)}`,
};