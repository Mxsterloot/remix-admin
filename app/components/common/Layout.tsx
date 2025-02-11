import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import AppBar from "./Appbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <AppBar onMenuClick={handleDrawerToggle} />
      <Sidebar 
        open={!isMobile || mobileOpen}
        onClose={handleDrawerToggle}
        variant={isMobile ? 'temporary' : 'permanent'}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          mt: { xs: 7, sm: 8 },
          width: {
            xs: '100%',
            md: `calc(100% - ${theme.spacing(30)})`
          },
          ml: { 
            xs: 0,
            md: theme.spacing(30)
          }
        }}
      >
        <Container maxWidth="xl" sx={{ mb: { xs: 8, sm: 10 } }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </Box>
  );
}