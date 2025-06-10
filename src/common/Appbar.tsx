import {
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  Menu,
  Popover,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "@tanstack/react-router";

import {
  aboutUsRoute,
  contactRoute,
  indexRoute,
  servicesRoute,
} from "../routes/routes";
import { LinkList } from "./LinkList";
import { ReactComponent as Logo } from "../assets/images/all_tree_works_logo.svg";
import { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Appbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile ? <MobileAppBar /> : <DesktopAppbar />;
};

export const DesktopAppbar = () => {
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

const MobileAppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    { text: "Home", path: indexRoute },
    { text: "Services", path: servicesRoute },
    { text: "About Us", path: aboutUsRoute },
    { text: "Contact Us", path: contactRoute },
  ];

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}
        sx={{ padding: "0 1rem" }}
        position={"relative"}
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
          <Logo height="3.5rem" style={{ color: "inherit" }} />
        </Link>
        <IconButton edge="start" color="inherit" onClick={toggleOpen}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Box
        width={"100%"}
        bgcolor="white"
        position={"absolute"}
        zIndex={1}
        sx={{
          maxHeight: isOpen ? "15rem" : "0",
          transition: "max-height 0.25s ease",
          overflow: "hidden",
        }}
      >
        <List sx={{ padding: 0 }}>
          {routes.map(({ text, path }) => (
            <Link
              key={text}
              onClick={toggleOpen}
              component={RouterLink}
              to={path.to}
              sx={{
                borderRadius: 0,
                textDecoration: "none",
                color: "primary.dark",
              }}
            >
              <Typography
                variant="h6"
                color="primary.dark"
                borderBottom={1}
                padding={2}
              >
                {text}
              </Typography>
            </Link>
          ))}
        </List>
      </Box>
    </>
  );
};
