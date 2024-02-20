import { Box, Grid, Typography } from "@mui/material";
import apiConfig from "../../api/apiConfig";
const CastList = (props) => {
  const casts = props.credits.cast.slice(0, 5);

  return (
    <Grid
      sx={{
        display: "flex",
        gap: "1rem",
        justifyItems: { md: "center", xs: "flex-start" },
        flexWrap: "wrap",
      }}
    >
      {casts.map((cast, i) => (
        <Box key={i} sx={{ width: "100px" }}>
          <Box
            component={"img"}
            sx={{
              width: "100px",
              height: "150px",
              borderRadius: "5px",
              objectFit: "fill",
              border: "1px solid GrayText",
              boxSizing: "border-box",
              boxShadow: "0px 0px 5px 3px rgba(0, 0, 0, 0.5)",
            }}
            src={`${apiConfig.w500Image(cast.profile_path)})`}
          />
          <Typography variant="subtitle2">{cast.name}</Typography>
        </Box>
      ))}
    </Grid>
  );
};

export default CastList;
