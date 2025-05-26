import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Contact = () => {
    return (
        <Box
            display="flex"
            flexDirection={"column"}
            gap="5rem"
        >
            <Box display="flex" flexDirection={"column"} gap="1rem">
                <Typography variant="h4">Contact Us</Typography>
                <Typography>
                    We're here to help with all your tree care needs! Whether you have
                    questions, need a free quote, or want to schedule a service, our
                    friendly team is ready to assist you promptly and professionally.
                </Typography>
            </Box>

            <Box display="flex" flexDirection={"column"} gap="1rem">
                <Typography variant="h5">Contact Information</Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={import.meta.env.VITE_CONTACT_NUMBER} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary={import.meta.env.VITE_CONTACT_EMAIL} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary={import.meta.env.VITE_CONTACT_LOCATION} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <AccessTimeIcon />
                        </ListItemIcon>
                        <ListItemText primary={import.meta.env.VITE_CONTACT_HOURS} />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};
