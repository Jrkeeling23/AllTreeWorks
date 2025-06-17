import { Box, Typography, useMediaQuery } from "@mui/material";
import vehicle from "../../assets/images/vehicle.jpeg";
import afterTree1_0 from "../../assets/images/after-tree-1.0.jpeg";
import beforeTree2_0 from "../../assets/images/before-tree-2.0.jpeg";
import afterTree2_0 from "../../assets/images/after-tree-2.0.jpeg";
import { FreeQuoteButton } from "../../common/FreeQuoteButton";
import { theme } from "../../assets/theme";
import { ImageCarousel } from "../../common/Carousel";

export const Services = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      gap="2rem"
    >
      <Box display="flex" flexDirection={"column"} gap="2rem">
        <Box display="flex" flexDirection={"column"} gap="1rem">
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Typography variant="h4">What We Do</Typography>
            {!isMobile && <FreeQuoteButton />}
          </Box>

          <Typography>
            At All Tree Works, we specialize in two essential services to keep
            your property safe, beautiful, and thriving: tree removal and tree
            pruning.
          </Typography>

          {isMobile && (
            <Box display="flex" width="100%" justifyContent={"center"}>
              <FreeQuoteButton />
            </Box>
          )}
        </Box>
        <Box display="flex" flexDirection={"column"} gap="1rem">
          <Typography variant="h5">Tree Removal</Typography>
          <Box display={"flex"} flexDirection={"column"} gap="2rem">
            <Typography>
              Sometimes, a tree has to come down—whether it's dead, diseased,
              leaning dangerously, or in the way of new construction. Our team
              is equipped with the skills and tools to safely and efficiently
              remove trees of all sizes. Using a combination of lift trucks and
              advanced climbing gear, we tailor our approach to suit the unique
              challenges of each removal. We always work with safety,
              efficiency, and property protection as our top priorities.
            </Typography>
            <Box display={"flex"} width={"100%"} justifyContent={"center"}>
              <Box width={isMobile ? "100%" : "30rem"}>
                <ImageCarousel images={[beforeTree2_0, afterTree2_0]} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection={"column"} gap="1rem">
          <Typography variant="h5">Tree Pruning</Typography>
          <Box display="flex" flexDirection="column" gap="2rem">
            <Typography>
              Proper pruning promotes healthy growth, improves tree structure,
              and enhances the appearance of your landscape. Whether you're
              looking to shape young trees, remove dead or damaged limbs, or
              reduce weight on heavy branches, our expert climbers and bucket
              truck operators will get the job done with precision and care. We
              understand the biology of trees and prune with long-term health in
              mind.
              <br />
              <br />
              No matter the scope of the job, you can count on All Tree Works to
              deliver professional service with a neighborly touch. We're here
              to keep Billings' trees strong, safe, and stunning
            </Typography>
            <Box display={"flex"} width={"100%"} justifyContent={"center"}>
              <Box width={isMobile ? "100%" : "30rem"}>
                <ImageCarousel images={[vehicle, afterTree1_0]} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent={isMobile ? "center" : "flex-end"}
      >
        <FreeQuoteButton />
      </Box>
    </Box>
  );
};
