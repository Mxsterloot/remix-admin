import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { Dashboard as DashboardIcon, Person, Settings, ChevronLeft, ChevronRight, Business, LocationCity, BookOnline, Work } from "@mui/icons-material";
import { Link } from "@remix-run/react";

const drawerWidth = 240;
const collapsedWidth = 65;

const sidebarItems = [
  {
    label: 'Dashboard',
    icon: DashboardIcon,
    to: '/dashboard',
  },
  {
    label: 'บริษัท',
    icon: Business,
    to: '/company',
  },
  {
    label: 'สาขา',
    icon: LocationCity,
    to: '/branch',
  },
  {
    label: 'สัญญา',
    icon: BookOnline,
    to: '/contract',
  },
  {
    label: 'แผนก',
    icon: Work,
    to: '/department',
  },
  {
    label: 'พนักงาน',
    icon: Person,
    to: '/employee',
  },
  {
    label: 'การตั้งค่าระบบ',
    icon: Settings,
    to: '/settings',
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  variant: 'permanent' | 'temporary';
}

export default function Sidebar({ open, onClose, variant }: SidebarProps) {

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
          {sidebarItems.map((item) => (
            <ListItem key={item.label} button component={Link} to={item.to}>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              {open && <ListItemText primary={item.label} />}
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}