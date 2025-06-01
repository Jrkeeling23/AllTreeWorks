import { Box, Typography } from "@mui/material";

export const AboutUs = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      gap="5rem"
    >
      <Box display="flex" flexDirection={"column"} gap="1rem">
        <Typography variant="h4">About Us</Typography>
        <Typography>
          At All Tree Works, we believe every tree tells a story—and we're here
          to help yours thrive. Founded in 2025 in the heart of Billings,
          Montana, our mission is to provide reliable, honest, and expert tree
          care services to homeowners, ranchers, and businesses across the
          region.
          <br />
          <br />
          As a locally owned and operated company, we understand the unique
          needs of Montana's trees and terrain. From pruning and removals to
          emergency storm cleanup and stump grinding, our certified arborists
          and skilled crew bring their experience, a deep respect for nature,
          and a commitment to safety and customer satisfaction to every job.
          <br />
          <br />
          We're more than just a tree company—we're your neighbors, and we treat
          your property like our own. Whether you're preserving a legacy tree,
          clearing land for new growth, or simply keeping your yard safe and
          beautiful, All Tree Works is here to help. Let us take care of the
          hard work, so you can enjoy the beauty of the trees around you.
        </Typography>
      </Box>
    </Box>
  );
};
