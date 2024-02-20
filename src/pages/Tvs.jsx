import { Fragment, useEffect, useState } from "react";
import { getAllList, apiTypes } from "../api/movies";
import { useParams } from "react-router-dom";
import { Container, Grid, Pagination, Typography } from "@mui/material";

import bgTv from "../assets/imgs/bgTv.jpg";
import BgDeatils from "../components/sections/detailsSections/BgDeatils";
import MovieCard from "../components/shared/MovieCard";
import apiConfig from "../api/apiConfig";

const Tvs = () => {
  const [allMovies, setAllMovies] = useState();
  const [page, setPage] = useState(1);
  const { type } = useParams();

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const res = await getAllList(apiTypes.category.tv, type, page);

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
      default:
        return "On Air";
    }
  };

  return (
    <Grid>
      <BgDeatils
        mask={`linear-gradient(to top, rgba(0, 0, 0, 0),rgba(0, 0, 0, 1))`}
        url={bgTv}
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
                {getTitle()} Tv
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

export default Tvs;
