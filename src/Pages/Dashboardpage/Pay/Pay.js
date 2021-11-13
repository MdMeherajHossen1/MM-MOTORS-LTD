import React from 'react';
import { Typography, Box } from '@mui/material';
const Pay = () => {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: "#1C0C5B", color: 'white' }} display="flex"

            width="100%" height={400}
            bgcolor="lightgreen"
            alignItems="center"
            justifyContent="center">
            <Box>
                <Typography variant="h2" component="div" sx={{ pt: 3, color: 'white', fontWeight: 'bold' }}>
                    Payment system coming soon.
                </Typography>


            </Box>

        </Box>
    );
};

export default Pay;