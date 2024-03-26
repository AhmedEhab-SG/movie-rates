import { useEffect, useState } from "react";
import { getDetailsById } from "../../api/movies";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import apiConfig from "../../api/apiConfig";
import DynamicRating from "../../utils/DynamicRating";
import { useNavigate } from "react-router-dom";
import ButtonStyled from "./ButtonStyled";
import { useIndexedDB } from "react-indexed-db-hook";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../../store/slice/watchList";

const WatchListCard = (props) => {
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  const { deleteRecord } = useIndexedDB("movies");
  const dispatch = useDispatch();

  useEffect(() => {
    const getDetailsCard = async () => {
      const movie = await getDetailsById(props.category, props.id);
      setMovie(movie.data);
    };

    getDetailsCard();
  }, [props]);

  const navHandler = () => navigate(`/details/${props.category}/${props.id}`);

  const removeHandler = async () => {
    await deleteRecord(props.id);
    dispatch(removeFromWatchList(props.id));
  };

  return (
    movie && (
      <Container
        sx={{
          display: "flex",
          gap: "3rem",
          alignItems: "center",
          boxShadow: "0 0 10px 0 rgba(255, 255, 255, 0.1)",
          borderRadius: "50px",
          padding: "2rem",
        }}
      >
        <Grid sx={{ flex: "1 1 0", width: "35%", minWidth: "7rem" }}>
          <Box
            onClick={navHandler}
            sx={{
              width: "100%",
              borderRadius: "15px",
              boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
            }}
            component="img"
            src={apiConfig.w500Image(movie.poster_path)}
          />
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography variant="h4">{movie.title}</Typography>
          <DynamicRating
            value={movie.vote_average / 2}
            size={"sm"}
            fill={"red"}
          />
          <Typography variant="body1" sx={{ maxWidth: "80%" }}>
            {movie.overview}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "1rem",
              gap: "1rem",
            }}
          >
            <ButtonStyled
              text="Go to Details"
              paddingInline="0.5rem"
              textSize="1rem"
              color="#fff"
              bColor="red"
              bgColor="red"
              bghColor="#fff"
              bgbhColor="#fff"
              shadow="0px 0px 7px 8px rgba(255, 0, 0, 0.3019607843)"
              hShadow="0px 0px 20px 18px rgba(255, 0, 0, 0.3019607843)"
              colorHover="red"
              onClick={navHandler}
            />
            <ButtonStyled
              text="Remove from Wishlist"
              paddingInline="0.5rem"
              textSize="1rem"
              color="#fff"
              bColor="#fff"
              bghColor="red"
              bgbhColor="red"
              onClick={removeHandler}
            />
          </Box>
        </Grid>
      </Container>
    )
  );
};

export default WatchListCard;
