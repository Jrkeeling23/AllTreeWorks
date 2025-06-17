import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "@tanstack/react-router";
import {
  indexRoute,
  servicesRoute,
  aboutUsRoute,
  contactRoute,
} from "../routes/routes";

export const LinkList = () => {
  return (
    <Box display="flex" height={"inherit"} alignItems={"center"} color="red">
      <Link
        height={"100%"}
        component={RouterLink}
        to={indexRoute.to}
        display="flex"
        alignItems="center"
        paddingX="16px"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Darken background
            textDecoration: "none",
          },
        }}
      >
        <Typography variant="h6" color="primary.dark">
          Home
        </Typography>
      </Link>
      <Link
        height={"100%"}
        component={RouterLink}
        to={servicesRoute.to}
        display="flex"
        alignItems="center"
        paddingX="16px"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Darken background
            textDecoration: "none",
          },
        }}
      >
        <Typography variant="h6" color="primary.dark">
          Services
        </Typography>
      </Link>
      <Link
        height={"100%"}
        component={RouterLink}
        to={aboutUsRoute.to}
        display="flex"
        alignItems="center"
        paddingX="16px"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Darken background
            textDecoration: "none",
          },
        }}
      >
        <Typography
          variant="h6"
          color="primary.dark"
          sx={{ wordBreak: "keep-all" }}
        >
          About Us
        </Typography>
      </Link>
      <Link
        height={"100%"}
        component={RouterLink}
        to={contactRoute.to}
        display="flex"
        alignItems="center"
        paddingX="16px"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Darken background
            textDecoration: "none",
          },
        }}
      >
        <Typography variant="h6" color="primary.dark">
          Contact
        </Typography>
      </Link>
    </Box>
  );
};
