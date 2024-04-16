import { Box, Button, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" fontWeight={600}>
        404
      </Typography>
      <Typography variant="h4">Page Not Found</Typography>
      <Typography variant="h6">
        The page you are looking for does not exist.
      </Typography>
      <Button
        variant="outlined"
        sx={{ fontSize: "1.2rem", mt: "1rem" }}
        color="inherit"
        href="/"
      >
        {" "}
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
