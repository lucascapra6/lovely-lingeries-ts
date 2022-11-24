import {createTheme} from "@mui/material/styles";
import Colors from "../colors/Colors";

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.main,
        },
        secondary: {
            main: Colors.white,
        },
    },
});

export default theme
