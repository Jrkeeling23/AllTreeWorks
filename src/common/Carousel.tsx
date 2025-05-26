import { Box, Fade } from "@mui/material";
import { useEffect, useState } from "react";

export const ImageCarousel = ({ images }: { images: string[] }) => {
    const [current, setCurrent] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);


    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false); // Start fade-out
            setTimeout(() => {
                setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                setFadeIn(true); // Start fade-in
            }, 500); // Match Fade duration
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box height="inherit" width="inherit">
            <Fade in={fadeIn} timeout={500}>
                <Box
                    component="img"
                    src={images[current]}
                    alt={`Slide ${current}`}
                    height="100%"
                    width="100%"
                    sx={{ objectFit: "cover", borderRadius: 2 }}
                />
            </Fade>
        </Box>
    );
};
