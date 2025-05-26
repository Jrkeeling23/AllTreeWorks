import { Box, Typography } from "@mui/material";

export const AboutUs = () => {
    return (
        <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            gap='5rem'
        >
            <Box display="flex" flexDirection={"column"} gap="1rem" >
                <Typography variant="h4">About Us</Typography>
                <Typography>
                    We offer expert tree trimming, removal, pruning, and storm cleanup
                    services for residential and commercial properties. No matter the
                    size of the job, we're equipped to keep your trees — and your
                    property — safe, healthy, and looking their best.
                </Typography>
            </Box>


        </Box>

    );
};
