import { createTheme } from "@mui/material";
import { brown, grey } from "@mui/material/colors";

export const themeConfig = createTheme({
  palette: {
    primary: {
      main: "#4A5680",
      contrastText: brown[700],
    },
    secondary: {
      main: grey[600],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 640,
      lg: 1024,
      xl: 1200,
    },
  },
});