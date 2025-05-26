// components/layout/PageHero.tsx
import { Box, Typography } from "@mui/material";

export const PageHero = ({
  imageSrc,
  alt = "page hero",
  title,
}: {
  imageSrc: string;
  alt?: string;
  title: string;
}) => (
  <Box
    sx={{
      position: 'relative',
      height: '25rem',
      width: '100%',
      overflow: 'hidden',
    }}
  >
    <Box
      component="img"
      src={imageSrc}
      alt={alt}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight={600} color='white'>
        {title}
      </Typography>
    </Box>
  </Box>
);
