import styles from "../variables-styles/styles";

const light = {
  palette: {
    mode: "light",
    background: {
      default: "gray",
      paper: "gray",
    },
  },
  typography: {
    fontFamily: styles.mainFontFamily,
    button: {
      fontFamily: styles.secandryFontFamily,
      textTransform: "none",
    },
  },
};

export default light;
