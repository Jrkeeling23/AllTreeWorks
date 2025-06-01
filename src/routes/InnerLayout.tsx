import { ReactNode } from "react";
import { PageHero } from "../common/PageHero";
import { Box } from "@mui/material";
import { useMatches } from "@tanstack/react-router";

export const InnerLayout = ({ children }: { children: ReactNode }) => {
  const matches = useMatches();
  // Find the nearest route
  const matchWithContext = [...matches].reverse()[0];
  return (
    <Box height="100%" width="100%">
      <PageHero
        imageSrc={matchWithContext?.context?.link || ""}
        title={matchWithContext?.context?.text || ""}
      />

      <Box
        flexGrow={1}
        display={"flex"}
        bgcolor="primary.light"
        sx={{
          marginX: {
            xs: "1rem",
            sm: "2rem",
            md: "5rem",
            lg: "10rem",
            xl: "30rem",
          },
          marginY: {
            xs: "1rem",
            sm: "2rem",
            md: "3rem",
            lg: "4rem",
            xl: "5rem",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
