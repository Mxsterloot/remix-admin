import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Grid,
    Divider,
    Container,
    Link as MuiLink
} from "@mui/material";
import { Form } from "@remix-run/react";
import { Google as GoogleIcon } from "@mui/icons-material";
import { useSignin } from "~/hooks/useSignin";

export default function SignIn() {
    const { handleSignin, isAuthenticated, email, password } = useSignin();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                backgroundColor: (theme) => theme.palette.grey[100]
            }}
        >
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: { xs: 3, sm: 4 } }}>
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        {isAuthenticated ? "Sign In" : "Register"}
                    </Typography>

                    <Form method="post">
                        <Grid container spacing={3}>
                            {!isAuthenticated && (
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="name"
                                        label="Full Name"
                                        autoComplete="name"
                                    />
                                </Grid>
                            )}

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    type="email"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    autoComplete={isAuthenticated ? "current-password" : "new-password"}
                                />
                            </Grid>

                            {!isAuthenticated && (
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            )}

                            <Grid item xs={12}>
                                <Button
                                    onClick={() => handleSignin(email, password)}
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                >
                                    {isAuthenticated ? "Sign In" : "Register"}
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Divider>OR</Divider>
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    size="large"
                                    startIcon={<GoogleIcon />}
                                    onClick={() => {
                                        // Add Google sign in logic here
                                    }}
                                >
                                    Continue with Google
                                </Button>
                            </Grid>

                            <Grid item xs={12} textAlign="center">
                                <Typography variant="body2">
                                    {isAuthenticated ? "Don't have an account? " : "Already have an account? "}
                                    <MuiLink
                                        component="button"
                                        variant="body2"
                                    >
                                        {isAuthenticated ? "Register" : "Sign In"}
                                    </MuiLink>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Form>
                </Paper>
            </Container>
        </Box>
    );
}
