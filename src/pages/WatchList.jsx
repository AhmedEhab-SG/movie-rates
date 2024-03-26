import WatchListCard from "../components/shared/WatchListCard";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const WatchList = () => {
  const allWatchList = useSelector((state) => state.watchList.list);

  return allWatchList.length < 1 ? (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "85vh",
      }}
    >
      <IoHeartDislikeSharp size={500} fill="gray" />
      <Typography variant="h5">
        No Movies were added to the Watch List.
      </Typography>
    </Grid>
  ) : (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "10vh",
        gap: "2rem",
        minHeight: "75vh",
        mb: "5vh",
      }}
    >
      <Typography variant="h3">Watch List</Typography>
      {allWatchList.map((movie) => (
        <WatchListCard category={movie.category} id={movie.id} key={movie.id} />
      ))}
    </Grid>
  );
};

export default WatchList;
