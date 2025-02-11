import { Grid } from "@mui/material";
import DashboardLayout from "~/components/common/Layout";
import ChangePassword from "~/components/settings/ChangePassword";

export default function Setting() {
  return (
    <DashboardLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ChangePassword />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}