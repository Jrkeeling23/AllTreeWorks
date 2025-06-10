import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link as RouterLink } from "@tanstack/react-router";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import { menuRoutes } from "../routes";

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        {!isMobile &&
          menuRoutes.map((route) => (
            <Link
              component={RouterLink}
              display="flex"
              alignItems="center"
              style={{ color: "white", textDecoration: "none", height: "100%" }}
              to={route.path.to}
            >
              <Typography variant="h6">{route.text}</Typography>
            </Link>
          ))}

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
