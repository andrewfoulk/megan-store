import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#ffffff", paper: "#f5f5f5" },
    text: { primary: "#171717" },
  },
  typography: {
    fontFamily: '"Geist Sans", Arial, Helvetica, sans-serif',
  },
});

export default theme;