import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontSize: 16,
        allVariants: {
            color: '#4D4D4D',  // Set default color to white for all text
        },
        fontFamily: 'IBM Plex Sans, Arial, sans-serif',
        h6: {
            // fontFamily: 'sans-serif',
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: "0.0075em",
            textTransform: "uppercase",
        }

    },
    palette: {
        primary: {
            main: "#ADA587",  // stone
            light: "#FFFFFF",
            dark: "#4D4D4D",
        },
    },
});
