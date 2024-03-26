import BgDeatils from "../../../components/sections/detailsSections/BgDeatils";
import apiConfig from "../../../api/apiConfig";
import ButtonStyled from "../../../components/shared/ButtonStyled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../../../styles/details-styles/details.module.css";
import CastList from "../../../components/shared/Credits";
import { Container, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchList,
  removeFromWatchList,
} from "../../../store/slice/watchList";
import { useIndexedDB } from "react-indexed-db-hook";
import { isFavored } from "../../../utils/functions";

const HeroDetails = (props) => {
  const dispatch = useDispatch();
  const { add, deleteRecord } = useIndexedDB("movies");

  const watchList = useSelector((state) => state.watchList.list);

  const isFavHandler = async (isFav, id) => {
    if (!isFav) {
      try {
        await add({
          id,
          type: "details",
          category: props.category,
        });
        dispatch(
          addToWatchList({
            id,
            type: "details",
            category: props.category,
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

  

  return (
    <BgDeatils details={props.details}>
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
            src={apiConfig.originalImage(props.details.poster_path)}
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
            {props.details.title || props.details.original_name}
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
            {props.details.genres.map((genre) => (
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
            <Typography variant="p">{props.details.overview}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBlock: "1rem",
            }}
          >
            <Typography sx={{}} variant="body1" component="i">
              {props.category.toUpperCase()}
            </Typography>
            <Typography
              sx={{ marginInline: "1rem" }}
              variant="body1"
              component="i"
            >
              {props.details.status}
            </Typography>
            <Typography variant="body1" component="i">
              {props.details.release_date}
            </Typography>
          </Box>

          {props.credits && <CastList credits={props.credits} />}
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              marginTop: "2rem",
              alignItems: "center",
              flexDirection: { md: "row", xs: "column-reverse" },
            }}
          >
            {/* <ButtonStyled
              text="Watch Trailer"
              color="#fff"
              bColor="red"
              bgColor="red"
              bghColor="#fff"
              bgbhColor="#fff"
              shadow="0px 0px 7px 8px rgba(255, 0, 0, 0.3019607843)"
              hShadow="0px 0px 20px 18px rgba(255, 0, 0, 0.3019607843)"
              colorHover="red"
            /> */}
            <ButtonStyled
              text={
                isFavored(watchList, props.details.id)
                  ? "Remove from WatchList"
                  : "Add to WatchList"
              }
              onClick={() =>
                isFavHandler(
                  isFavored(watchList, props.details.id),
                  props.details.id
                )
              }
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
              value={props.details.vote_average * 10}
              text={props.details.vote_average.toFixed(1)}
            />
          </Box>
        </Box>
      </Container>
    </BgDeatils>
  );
};

export default HeroDetails;
