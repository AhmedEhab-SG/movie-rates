import { Grid, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiTypes, getAllList } from "../../../api/movies";
import apiConfig from "../../../api/apiConfig";
import Background from "../../shared/Background";
import ButtonStyled from "../../shared/ButtonStyled";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useIndexedDB } from "react-indexed-db-hook";
import { useDispatch } from "react-redux";
import {
  addToWatchList,
  removeFromWatchList,
} from "../../../store/slice/watchList";
import { isFavored } from "../../../utils/functions";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState();
  const { add, deleteRecord } = useIndexedDB("movies");
  const dispatch = useDispatch();

  const watchList = useSelector((state) => state.watchList.list);

  const navigate = useNavigate();

  useEffect(() => {
    const getHeroMovies = async () => {
      try {
        const res = await getAllList(
          apiTypes.category.movie,
          apiTypes.movie.popular,
          1
        );
        setMovieItems(res.data.results.slice(0, 4));
      } catch (err) {
        console.log(err);
      }
    };
    getHeroMovies();
  }, []);

  const isFavHandler = async (isFav, id) => {
    if (!isFav) {
      try {
        await add({
          id,
          type: apiTypes.movie.popular,
          category: apiTypes.category.movie,
        });
        dispatch(
          addToWatchList({
            id,
            type: apiTypes.movie.popular,
            category: apiTypes.category.movie,
          })
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await deleteRecord(id);
        dispatch(removeFromWatchList(id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const navHandler = (id) =>
    navigate(`/details/${apiTypes.category.movie}/${id}`);

  return (
    <Grid
      sx={{
        width: "100%",
      }}
    >
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView={1}
        autoplay={{ delay: "4000", disableOnInteraction: false }}
      >
        {movieItems &&
          movieItems.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <Background url={apiConfig.originalImage(movie.backdrop_path)}>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      flexDirection: { lg: "row", xs: "column-reverse" },
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: { lg: "0", xs: "5rem" },
                      gap: "3rem",
                      mb: "5rem",
                    }}
                  >
                    <Grid
                      item
                      sx={{
                        width: { lg: "50%", xs: "95%" },
                        display: "flex",
                        flexDirection: "column",
                        gap: "3rem",
                      }}
                    >
                      <Typography variant="h1" sx={{ fontWeight: "500" }}>
                        {movie.title}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: "500" }}>
                        {movie.overview}
                      </Typography>
                      <Box sx={{ display: "flex", gap: "2rem" }}>
                        <ButtonStyled
                          onClick={() => navHandler(movie.id)}
                          text="Watch Details"
                          color="#fff"
                          bColor="red"
                          bgColor="red"
                          bghColor="#fff"
                          bgbhColor="#fff"
                          shadow="0px 0px 7px 8px rgba(255, 0, 0, 0.3019607843)"
                          hShadow="0px 0px 20px 18px rgba(255, 0, 0, 0.3019607843)"
                          colorHover="red"
                        />
                        <ButtonStyled
                          text={
                            isFavored(watchList, movie.id)
                              ? "Remove from WatchList"
                              : "Add to WatchList"
                          }
                          onClick={() =>
                            isFavHandler(
                              isFavored(watchList, movie.id),
                              movie.id
                            )
                          }
                          color="#fff"
                          bColor="#fff"
                          bghColor="red"
                          bgbhColor="red"
                        />
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box
                        sx={{
                          width: "400px",
                          boxShadow: ` rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                          borderRadius: "30px",
                        }}
                        component="img"
                        src={apiConfig.originalImage(movie.poster_path)}
                      />
                    </Grid>
                  </Grid>
                </Background>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Grid>
  );
};

export default HeroSlide;
