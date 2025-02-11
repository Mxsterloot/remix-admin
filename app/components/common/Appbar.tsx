import { IceSkating } from "@mui/icons-material";
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
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <IceSkating />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Dashboard
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}