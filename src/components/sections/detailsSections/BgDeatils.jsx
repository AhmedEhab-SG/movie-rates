import { Box } from "@mui/material";
import { useInView } from "framer-motion";
import { useRef } from "react";
import apiConfig from "../../../api/apiConfig";

const BgDeatils = (props) => {
  const backgroundRef = useRef(null);
  const isInViewBackground = useInView(backgroundRef);

  const details = props.details;

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${
            props.url ||
            apiConfig.originalImage(
              details.backdrop_path || details.poster_path
            )
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage:
            props.mask ||
            `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 1))`,
          opacity: isInViewBackground ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      />
      <Box
        ref={backgroundRef}
        sx={{
          position: "relative",
          // transform: isInViewBackground ? "none" : "translateY(30px)",
          opacity: isInViewBackground ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)0.4s",
          zIndex: 1,
          width: "100%",
          display: "flex",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default BgDeatils;
