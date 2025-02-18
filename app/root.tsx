import { ThemeProvider } from "@emotion/react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "@remix-run/react";
import theme from "./theme";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  const message = isRouteErrorResponse(error)
    ? error.data
    : (error as Error).message;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        p: 4
      }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: 2,
          bgcolor: 'background.paper',
          boxShadow: 3,
          textAlign: 'center'
        }}
      >
        <Typography 
          variant="h4" 
          component="h1"
          sx={{ 
            mb: 2,
            color: 'error.main',
            fontWeight: 'bold'
          }}
        >
          {message ?? "An error occurred"}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Sorry, something went wrong. Please try again later.
        </Typography>
        <Button variant="contained" color="error" onClick={() => navigate('/')}>
          กลับหน้าหลัก
        </Button>
      </Box>
    </Box>
  );
}
