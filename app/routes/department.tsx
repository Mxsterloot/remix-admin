import { Button, Grid, Typography } from "@mui/material";
import DashboardLayout from "~/components/common/Layout";
import SearchBox from "~/components/common/form/input/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { companySelector, setCompanySearch } from "~/store/slices/companySlice";
import DataTable from "~/components/table/DataTable";

const moduleName = "แผนก";
export default function Department() {
  
  const dispatch = useDispatch();
  const { companySearch } = useSelector(companySelector);

  return (
    <DashboardLayout>
      <Typography variant="h4" component="h1" gutterBottom>
        {moduleName}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <SearchBox label="ค้นหา" value={companySearch} onChange={(value) => dispatch(setCompanySearch(value))} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Button variant="contained" color="primary">
            เพิ่ม{moduleName}
          </Button>
          <Button variant="contained" color="primary">
            export
          </Button>
          <Button variant="contained" color="primary">
            import
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} pt={2}>
        <Grid item xs={12}>
          <DataTable />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}