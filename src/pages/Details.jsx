import { useEffect, useState } from "react";
import { getCreditsById, getDetailsById } from "../api/movies";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import BgDeatils from "../components/sections/detailsSections/BgDeatils";
import apiConfig from "../api/apiConfig";
import ButtonStyled from "../components/shared/ButtonStyled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../styles/details-styles/details.module.css";
import CastList from "../components/shared/Credits";
const Details = () => {
  const [details, setDetails] = useState();
  const [credits, setCredits] = useState();
  const { category, id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await getDetailsById(category, id);
        const creditRes = await getCreditsById(category, id);
        setCredits(creditRes.data);
        setDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDetails();
  }, [category, id]);

  console.log(credits);

  return (
    details && (
      <BgDeatils details={details}>
        <Container
          sx={{
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            paddingTop: { lg: "0", xs: "8rem" },
            alignItems: { lg: "flex-start", xs: "center" },
            gap: "3rem",
            width: "100%",
            position: "relative",
          }}
        >
          <Box sx={{ width: "35%", minWidth: "15rem" }}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "15px",
                boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.5)",
              }}
              component="img"
              src={apiConfig.originalImage(details.poster_path)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { lg: "flex-start", xs: "center" },
            }}
          >
            <Typography sx={{ fontWeight: "600", mb: 2 }} variant="h2">
              {details.title || details.original_name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                gap: "2rem",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}
            >
              {details.genres.map((genre) => (
                <Typography
                  variant="span"
                  sx={{
                    border: "3px solid #fff",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "20px",
                  }}
                  key={genre.id}
                >
                  {genre.name}
                </Typography>
              ))}
            </Box>
            <Box sx={{ maxWidth: "45rem" }}>
              <Typography variant="p">{details.overview}</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBlock: "1rem",
              }}
            >
              <Typography sx={{}} variant="body1" component="i">
                {category.toUpperCase()}
              </Typography>
              <Typography
                sx={{ marginInline: "1rem" }}
                variant="body1"
                component="i"
              >
                {details.status}
              </Typography>
              <Typography variant="body1" component="i">
                {details.release_date}
              </Typography>
            </Box>

            {credits && <CastList credits={credits} />}
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                marginTop: "2rem",
                alignItems: "center",
                flexDirection: { md: "row", xs: "column-reverse" },
              }}
            >
              <ButtonStyled
                text="Watch Trailer"
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
                text="Add To Wishlist"
                color="#fff"
                bColor="#fff"
                bghColor="red"
                bgbhColor="red"
              />
              <CircularProgressbar
                className={styles.progressbar}
                styles={buildStyles({
                  pathColor: `red`,
                  trailColor: "gray",
                  textSize: "2rem",
                  textColor: "#fff",
                })}
                value={details.vote_average * 10}
                text={details.vote_average.toFixed(1)}
              />
            </Box>
          </Box>
        </Container>
      </BgDeatils>
    )
  );
};

export default Details;
