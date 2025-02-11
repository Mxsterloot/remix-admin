import { Typography } from "@mui/material";
import DashboardLayout from "~/components/common/Layout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Dashboard
      </Typography>
      <Typography paragraph>
        This is your dashboard main content area. You can customize this space based on your needs.
      </Typography>
    </DashboardLayout>
  );
}