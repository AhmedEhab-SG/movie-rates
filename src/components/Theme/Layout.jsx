import dark from "../../styles/modes/dark";
import { createTheme, ThemeProvider, CssBaseline, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import light from "../../styles/modes/light";

const Layout = (props) => {
  const mode = useSelector((state) => state.themeMode.mode);
  const LayoutTheme = createTheme(mode === "dark" ? dark : light);

  return (
    <ThemeProvider theme={LayoutTheme}>
      <CssBaseline />
      <Grid position="relative">{props.children}</Grid>
    </ThemeProvider>
  );
};

export default Layout;
