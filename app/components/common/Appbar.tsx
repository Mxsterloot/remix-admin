import { LogoDev } from "@mui/icons-material";
import { IconButton, AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
export default function AppBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <MuiAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <LogoDev />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          HR System
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}