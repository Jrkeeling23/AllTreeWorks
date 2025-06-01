import { Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { contactRoute } from "../routes/routes";

export const FreeQuoteButton = () => {
  return (
    <Button
      component={Link}
      to={contactRoute.id}
      sx={{
        padding: "1rem",
        width: "15rem",
        color: "white",
        backgroundColor: "#4CAF50", // green
        "&:hover": {
          backgroundColor: "#4CAF5097", // darker green on hover
        },
      }}
    >
      Get a free quote today!
    </Button>
  );
};
