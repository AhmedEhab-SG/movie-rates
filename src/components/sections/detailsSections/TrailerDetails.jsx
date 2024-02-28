import { Container, Box } from "@mui/material";

const TrailerDetails = (props) => {
  console.log(props.videos);
  const embedYtElement = props.videos.map((video) => {
    return (
      <Box
        key={video.key}
        sx={{
          width: "100%",
          maxWidth: "560px",
          height: "315px",
          borderRadius: "15px",
        }}
      >
        <iframe
          title={video.name}
          style={{
            borderRadius: "inherit",
            width: "inherit",
            height: "inherit",
            maxWidth: "inherit",
            border: "0",
          }}
          src={`https://www.youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    );
  });

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        marginBlock: "5rem",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {embedYtElement.reverse()}
    </Container>
  );
};

export default TrailerDetails;
