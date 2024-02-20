import { Grid, Container, Typography, Box } from "@mui/material";
import BgFooter from "../../assets/imgs/BgFooter.jpg";

const Footer = () => {
  return (
    <Grid container sx={{ width: "100%", position: "relative" }}>
      <Box
        sx={{
          backgroundImage: `url(${BgFooter})`,
          objectFit: "fill",
          maskImage: `radial-gradient(ellipse, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.8) 100%)`,
          opacity: 0.9,
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />
      <Container
        sx={{
          zIndex: "1",
          display: "flex",
          padding: "30px 0",
          gap: { md: "0", xs: "2rem" },
          justifyContent: { md: "space-between", xs: "space-evenly" },
          alignItems: { md: "5rem", xs: "center" },
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: "white" }}>
            Provider
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            123 Main Street, New York, NY 10001
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}></Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: "white" }}>
            Lovely Build
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            123 Main Street, New York, NY 10001
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}></Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: "white" }}>
            Contact us
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            123 Main Street, New York, NY 10001
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}></Typography>
        </Box>
      </Container>
      <Box sx={{ textAlign: "center", width: "100%", mb: 1, zIndex: "1" }}>
        <Typography>Lovely build by Ahmed Ehab</Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
