import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { Dashboard as DashboardIcon, Person, Settings, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Link } from "@remix-run/react";

const drawerWidth = 240;
const collapsedWidth = 65;

export default function Sidebar({ open, onClose, variant }: { open: boolean, onClose: () => void, variant: 'permanent' | 'temporary' }) {
 
  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : collapsedWidth,
          boxSizing: 'border-box',
          overflowX: 'hidden',
          transition: 'width 0.2s',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 8 }}>
        <IconButton 
          onClick={onClose}
          sx={{ ml: open ? 1 : 0.5, mb: 1 }}
        >
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItem>
          <ListItem button component={Link} to="/profile">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            {open && <ListItemText primary="Profile" />}
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            {open && <ListItemText primary="Settings" />}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}