import createTheme from "spectacle/lib/themes/default";

const theme = createTheme(
  {
    primary: "#080705",
    secondary: "#702632",
    tertiary: "#fffffa",
    quaternary: "#912f40",
    gray: "#40434e"
  },
  {
    primary: {
      name: "Montserrat",
      googleFont: true
    }
  }
);

export default theme;
