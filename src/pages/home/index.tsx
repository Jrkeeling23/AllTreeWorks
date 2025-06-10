import { Box, Typography } from "@mui/material";
import { FreeQuoteButton } from "../../common/FreeQuoteButton";

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      gap="5rem"
      flexGrow={1}
    >
      <Box display="flex" flexDirection={"column"} gap="1rem">
        <Typography variant="h4">Welcome to All Tree Works</Typography>
        <Typography>
          With experience and a commitment to safety, we treat every property as
          if it were our own. Whether it's trimming to improve tree health or
          removing a hazardous limb, our certified team is here to handle it
          with care, precision, and respect for your space. Fully insured,
          locally owned, and always dependable — your trees are in good hands.
        </Typography>
      </Box>

      <Box display="flex" flexDirection={"column"} gap="1rem">
        <Typography variant="h5">What We Do</Typography>
        <Box
          display="flex"
          flexDirection={"column"}
          gap="2rem"
          alignItems={{ xs: "center", sm: "flex-end" }}
        >
          <Typography display="flex">
            We offer expert tree trimming, removal, pruning, and storm cleanup
            services for residential and commercial properties. No matter the
            size of the job, we’re equipped to keep your trees — and your
            property — safe, healthy, and looking their best.
          </Typography>
          <FreeQuoteButton />
        </Box>
      </Box>
    </Box>
  );
};
