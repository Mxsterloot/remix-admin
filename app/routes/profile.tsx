import { Box, Typography, CircularProgress, Button } from "@mui/material";
import DashboardLayout from "~/components/common/Layout";
import { useGetUserQuery, useUpdateUserMutation } from "~/store/api/userApi";

export default function Profile() {
  const userId = "1"; // Get this from auth state or URL params
  const { data: user, isLoading, error } = useGetUserQuery(userId);
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  if (isLoading) {
    return (
      <DashboardLayout>
        <CircularProgress />
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <Typography color="error">
          Error loading profile
        </Typography>
      </DashboardLayout>
    );
  }

  const handleUpdateName = async () => {
    try {
      await updateUser({
        id: userId,
        data: { name: "New Name" }
      }).unwrap();
    } catch (err) {
      console.error('Failed to update user:', err);
    }
  };

  return (
    <DashboardLayout>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile
        </Typography>
        <Typography>Name: {user?.name}</Typography>
        <Typography>Email: {user?.email}</Typography>
        <Button 
          onClick={handleUpdateName}
          disabled={isUpdating}
        >
          Update Name
        </Button>
      </Box>
    </DashboardLayout>
  );
}