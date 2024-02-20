import { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

import MovieFilterIcon from "@mui/icons-material/MovieFilter";

//import { changeMode } from "../../store/slice/theme";
//import { useSelector, useDispatch } from "react-redux";
//import LightModeIcon from "@mui/icons-material/LightMode";
//import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { apiTypes } from "../../api/movies";

const pages = ["TV", "Movie", "Watch List"];

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  //const mode = useSelector((state) => state.themeMode.mode);
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const homeHandler = () => {
    const isHomePage = location.pathname === "/";
    isHomePage ? window.scrollTo({ top: 0 }) : navigate(`/`);
  };

  const navHandler = (e) => {
    const targetText = e.target.textContent.toLowerCase();
    console.log(targetText);
    let endpoint = "";

    switch (targetText) {
      case "tv":
        endpoint = "on_the_air";
        break;
      case "movie":
        endpoint = "upcoming";
        break;
      default:
        endpoint = "watchlist";
        break;
    }

    setDrawer(() => false);

    navigate(
      `${
        endpoint === "watchlist"
          ? "/watchlist"
          : `/${apiTypes.category[targetText]}/${apiTypes[targetText][endpoint]}`
      }`
    );
  };

  return (
    <Fragment>
      <AppBar
        sx={{ backgroundColor: "inherit", backdropFilter: `blur(20px)` }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between" }}
            disableGutters
          >
            <Box
              onClick={homeHandler}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <MovieFilterIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",

                  textDecoration: "none",
                }}
              >
                Movies
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              onClick={homeHandler}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                display: { xs: "flex", md: "none" },
                mr: 1,
              }}
            >
              <MovieFilterIcon sx={{ mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",

                  textDecoration: "none",
                }}
              >
                Movies
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={navHandler}
                    sx={{ display: "block", mr: 1, color: "#fff" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              {/* <IconButton value={mode} onClick={() => dispatch(changeMode())}>
                {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton> */}
            </Box>
          </Toolbar>
        </Container>
        <Drawer
          PaperProps={{
            style: {
              width: "40%",
              backdropFilter: `blur(20px)`,
              background: "inherit",
              display: "flex",
              alignItems: "center",
            },
          }}
          anchor="left"
          open={drawer}
          onClose={() => setDrawer(false)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "8rem",
              marginTop: "40%",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={navHandler}
                sx={{ display: "block", mr: 1, color: "#fff" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Drawer>
      </AppBar>
    </Fragment>
  );
};
export default Header;
