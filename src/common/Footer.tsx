import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "@tanstack/react-router";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  indexRoute,
  servicesRoute,
  aboutUsRoute,
  contactRoute,
} from "../routes/routes";

export const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      bottom="0"
      bgcolor="primary.main"
      p={5}
    >
      <Box display="flex" gap="3rem" alignItems={"center"}>
        <Link
          component={RouterLink}
          display="flex"
          alignItems="center"
          style={{ color: "white", textDecoration: "none", height: "100%" }}
          to={indexRoute.to}
        >
          <Typography variant="h6">Home</Typography>
        </Link>
        <Link
          component={RouterLink}
          display="flex"
          alignItems="center"
          style={{ color: "white", textDecoration: "none" }}
          to={servicesRoute.to}
        >
          <Typography variant="h6">Services</Typography>
        </Link>
        <Link
          component={RouterLink}
          display="flex"
          alignItems="center"
          style={{ color: "white", textDecoration: "none" }}
          to={aboutUsRoute.to}
        >
          <Typography variant="h6">About Us</Typography>
        </Link>
        <Link
          component={RouterLink}
          display="flex"
          alignItems="center"
          style={{ color: "white", textDecoration: "none" }}
          to={contactRoute.to}
        >
          <Typography variant="h6">Contact</Typography>
        </Link>

        <a
          href={import.meta.env.VITE_FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box color="primary.dark">
            <FacebookIcon />
          </Box>
        </a>
      </Box>
      <Typography padding={2} textAlign="center">
        © 2025 All rights reserved
      </Typography>
    </Box>
  );
};
