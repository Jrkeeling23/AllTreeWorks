import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/theme";
import { Box } from "@mui/material";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};
