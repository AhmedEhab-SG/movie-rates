import { Grid, Container, Typography, Box } from "@mui/material";
import BgFooter from "../../assets/imgs/BgFooter.jpg";

const Footer = () => {
  return (
    <Grid container sx={{ width: "100%", position: "relative" }}>
      <Box
        sx={{
          backgroundImage: `url(${BgFooter})`,
          objectFit: "fill",
          maskImage: `radial-gradient(ellipse, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0,0) 100%)`,
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
          padding: "13px 0",
          gap: { md: "0", xs: "2rem" },
          justifyContent: { md: "space-between", xs: "space-evenly" },
          alignItems: { md: "5rem", xs: "center" },
          flexDirection: { md: "row", xs: "column" },
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography variant="h5" sx={{ color: "white" }}>
            Provider
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            (TMDB) API
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}></Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography variant="h5" sx={{ color: "white" }}>
            Movies WatchList
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            to save your favorite movies without login
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}></Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography variant="h5" sx={{ color: "white" }}>
            Contact us
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            ahmed@ahmedehab-sg.com
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}></Typography>
        </Box>
      </Container>
      <Box sx={{ textAlign: "center", width: "100%", mb: 1, zIndex: "1" }}>
        <span>Lovely build by </span>
        <a
          style={{ color: "aqua", textDecoration: "none" }}
          href="https://ahmedehab-sg.com/"
          rel="noreferrer"
          target="_blank"
        >
          Ahmed Ehab
        </a>
      </Box>
    </Grid>
  );
};

export default Footer;
