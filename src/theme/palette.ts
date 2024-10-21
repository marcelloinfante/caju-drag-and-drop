import { alpha } from "@mui/material/styles";

import { StatusEnum } from "~/types";

export const grey = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

export const primary = {
  lighter: "#C8FAD6",
  light: "#5BE49B",
  main: "#00A76F",
  dark: "#007867",
  darker: "#004B50",
  contrastText: "#FFFFFF",
};

export const secondary = {
  lighter: "#EFD6FF",
  light: "#C684FF",
  main: "#8E33FF",
  dark: "#5119B7",
  darker: "#27097A",
  contrastText: "#FFFFFF",
};

export const info = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#FFFFFF",
};

export const success = {
  lighter: "#D3FCD2",
  light: "#77ED8B",
  main: "#22C55E",
  dark: "#118D57",
  darker: "#065E49",
  contrastText: "#ffffff",
};

export const warning = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: grey[800],
};

export const error = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF",
};

export const common = {
  black: "#000000",
  white: "#FFFFFF",
};

export const text = {
  primary: primary.main,
  secondary: secondary.main,
  success: success.main,
  error: error.main,
  info: info.main,
  warning: warning.main,
  textPrimary: grey[800],
  textSecondary: grey[600],
  textDisabled: grey[500],
};

export const background = {
  paper: "#FFFFFF",
  default: "#FFFFFF",
  neutral: grey[200],
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

export const button = {
  primary: {
    textColor: primary.contrastText,
    backgroundColor: primary.main,
  },
  secondary: {
    textColor: secondary.contrastText,
    backgroundColor: secondary.main,
  },
  success: {
    textColor: success.contrastText,
    backgroundColor: success.main,
  },
  error: {
    textColor: error.contrastText,
    backgroundColor: error.main,
  },
  info: {
    textColor: info.contrastText,
    backgroundColor: info.main,
  },
  warning: {
    textColor: warning.contrastText,
    backgroundColor: warning.main,
  },
};

export const registrationColumns = {
  [StatusEnum.REVIEW]: {
    color: "#EFC24D",
    backgroundColor: "#FDF8E9",
  },
  [StatusEnum.APPROVED]: {
    color: "#4242DF",
    backgroundColor: "#EEEEFD",
  },
  [StatusEnum.REPROVED]: {
    color: "#CE2893",
    backgroundColor: "#FBEDF6",
  },
};
