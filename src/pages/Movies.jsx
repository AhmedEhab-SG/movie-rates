import { Fragment, useEffect, useState } from "react";
import { getAllList, apiTypes } from "../api/movies";
import { useParams } from "react-router-dom";
import { Container, Grid, Pagination, Typography } from "@mui/material";

import bgMovies from "../assets/imgs/bgMovies.jpg";
import BgDeatils from "../components/sections/detailsSections/BgDeatils";
import MovieCard from "../components/shared/MovieCard";
import apiConfig from "../api/apiConfig";

const Movies = () => {
  const [allMovies, setAllMovies] = useState();
  const [page, setPage] = useState(1);
  const { type } = useParams();

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const res = await getAllList(apiTypes.category.movie, type, page);

        setAllMovies(() => res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [page, type]);

  const getTitle = () => {
    switch (type) {
      case "popular":
        return "Popular";
      case "top_rated":
        return "Top Rated";
      case "upcoming":
        return "Upcoming";
      default:
        return;
    }
  };

  return (
    <Grid>
      <BgDeatils
        mask={`linear-gradient(to top, rgba(0, 0, 0, 0),rgba(0, 0, 0, 1))`}
        url={bgMovies}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            mt: 10,
            width: "100%",
          }}
        >
          {allMovies && (
            <Fragment>
              <Typography
                variant="h3"
                sx={{
                  width: "100%",
                  mb: "5rem",
                  mt: "2rem",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                {getTitle()} Movies
              </Typography>

              {allMovies.results.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    type={type}
                    category={apiTypes.category.movie}
                    img={apiConfig.w500Image(movie.poster_path)}
                    title={movie.title || movie.original_name}
                    overview={movie.overview}
                  />
                );
              })}
            </Fragment>
          )}
        </Container>
      </BgDeatils>
      {allMovies && (
        <Pagination
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 5,
            mb: 5,
          }}
          onChange={(e, v) => setPage(() => v)}
          count={500}
          color="primary"
        />
      )}
    </Grid>
  );
};

export default Movies;
