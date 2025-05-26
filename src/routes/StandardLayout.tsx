import { Box } from "@mui/material";
import { ReactNode } from "react";
import { Appbar } from "../common/Appbar";
import { Footer } from "../common/Footer";

export const StandardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor="primary.light"
      overflow="clip"
    >
      <Box bgcolor="primary.main">
        <Appbar />
      </Box>

      <Box
        flexGrow={1}
        display={'flex'}
        bgcolor="primary.light"
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};
