import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        position: 'fixed', // Fix the footer position
        bottom: 0, // Place at bottom
        left: 0, // Align to left edge
        right: 0, // Stretch across full width
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        zIndex: 1000, // Ensure footer stays above other content
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {' Your Company Name. All rights reserved.'}
      </Typography>
    </Box>
  );
}
