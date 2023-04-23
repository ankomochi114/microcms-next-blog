import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#4fc4cf",
    },
    secondary: {
      main: "#994ff3",
    },
    error: {
      main: "#d32f2f",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h3",
          h3: "h4",
          h4: "h5",
          h5: "h6",
          h6: "h6",
          subtitle1: "subtitle1",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
