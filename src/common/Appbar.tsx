import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "@tanstack/react-router";

import { indexRoute } from "../routes/routes";
import { LinkList } from "./LinkList";
import { ReactComponent as Logo } from "../assets/images/all_tree_works_logo.svg";

export const Appbar = () => {
    return (
        <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            height="5rem"
            sx={{
                marginX: {
                    xs: "1rem",
                    sm: "2rem",
                    md: "5rem",
                    lg: "10rem",
                    xl: "30rem",
                },
            }}
        >
            <Link
                component={RouterLink}
                to={indexRoute.to}
                sx={{
                    height: "100%",
                    borderRadius: 0,
                    color: "primary.dark",
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        textDecoration: "none",
                    },
                }}
            >
                <Logo height="5rem" style={{ color: "inherit" }} />
            </Link>
            <LinkList />
        </Box>
    );
};
