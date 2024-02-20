import styles from "../variables-styles/styles";

const dark = {
  palette: {
    mode: "dark",
    background: {
      default: styles.backGroundColor,
      paper: styles.paperColor,
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

export default dark;
