import {
  Card,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Fragment, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useIndexedDB } from "react-indexed-db-hook";
import { useSelector } from "react-redux";
import {
  addToWatchList,
  removeFromWatchList,
} from "../../store/slice/watchList";
import { useDispatch } from "react-redux";

const MovieCard = (props) => {
  const { add, deleteRecord } = useIndexedDB("movies");
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const watchList = useSelector((state) => state.watchList.list);
  const [isFavored, setIsFavored] = useState(
    watchList.some((item) => item.id === props.id) || false
  );
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true });

  const navagateHanddler = (e) => {
    if (e.target.tagName === "svg" || e.target.tagName === "path") return;
    navigate(`/details/${props.category}/${props.id}`);
  };

  const favHandler = async () => {
    const { id, type, category } = props;

    if (!isFavored) {
      try {
        await add({ id, type, category });
        dispatch(addToWatchList({ id, type, category }));
        setIsFavored(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await deleteRecord(id);
        dispatch(removeFromWatchList(id));
        setIsFavored(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Card
      onClick={navagateHanddler}
      sx={{
        width: 280,
        background: "transparent ",
        position: "relative",
        margin: "0.5rem",
        transform: props.animation && (isInView ? "none" : "translateY(50px)"),
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        cursor: "pointer",
        borderRadius: "15px",
        boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.5)",
      }}
      ref={ref}
      onMouseEnter={() => setIsHover(() => true)}
      onMouseLeave={() => setIsHover(() => false)}
    >
      <CardMedia
        component="img"
        height="400"
        image={props.img}
        alt="Paella dish"
        sx={{
          objectFit: "cover",
          cursor: "pointer",
          transform: isHover ? "scale(1.2)" : "scale(1)",
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
          maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 1))`,
        }}
      />

      <CardContent
        sx={{
          textAlign: "center",
          fontWeight: "600",
          position: "absolute",
          bottom: "0",
          width: "100%",
          backdropFilter: `blur(20px)`,
          opacity: !isHover ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
          padding: 0,
          borderTopRightRadius: "18px",
          borderTopLeftRadius: "18px",
        }}
      >
        <IconButton
          aria-label="add to favorites"
          sx={{
            padding: 0,
            m: 0,
            animation: "hoverOn 1s ease-in-out infinite",
            "@keyframes hoverOn": {
              "0%": {
                top: "0px",
              },
              "50%": {
                top: "5px",
              },
              "100%": {
                top: "0px",
              },
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
        <Typography variant="body1" sx={{ mb: 1 }}>
          {props.title}
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          position: "absolute",
          backdropFilter: `blur(30px)`,

          // transform: isInView ? "none" : "translateY(-75px)",
          bottom: isHover ? "-5px" : "-200%",
          right: "0",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          borderTopRightRadius: "18px",
          borderTopLeftRadius: "18px",
        }}
      >
        <Fragment>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              mb: 1.5,
              fontWeight: "600",
              textDecoration: "underline",
              textDecorationThickness: "3px",
              textUnderlineOffset: "0.5rem",
              textDecorationColor: "red",
            }}
          >
            {props.title}
          </Typography>
          <Typography variant="body2" color="#fff" sx={{ textAlign: "center" }}>
            {props.overview}
          </Typography>
        </Fragment>
      </CardContent>
      <IconButton
        aria-label="add to favorites"
        onClick={favHandler}
        sx={{
          position: "absolute",
          color: isFavored ? "red" : "#fff",
          top: "5px",
          right: isHover ? "5px" : "-50px",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          animation: "beating 1s ease-in-out infinite",
          "@keyframes beating": {
            "0%": {
              transform: `scale(1)`,
            },
            "50%": {
              transform: `scale(1.3)`,
            },
            "100%": {
              transform: `scale(1)`,
            },
          },
        }}
      >
        <FavoriteIcon />
      </IconButton>
      <IconButton
        aria-label="share"
        sx={{
          position: "absolute",
          top: isHover ? "5px" : "-50px",
          right: "50px",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <ShareIcon />
      </IconButton>
    </Card>
  );
};

export default MovieCard;
