import { Box, Container, Typography, useMediaQuery } from "@mui/material";

const YTVideoPlayer = (): JSX.Element => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Container id="Trailer">
        <Box>
          {isSmallScreen ? (
            <Typography
              component="h1"
              variant="h2"
              sx={{ mb: "2rem", letterSpacing: "0.2rem" }}
            >
              TRAILER
            </Typography>
          ) : (
            <Typography
              component="h1"
              variant="h1"
              sx={{ mb: "3rem", letterSpacing: "0.2rem" }}
            >
              TRAILER
            </Typography>
          )}
        </Box>
      </Container>
      <Container
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: "0",
          overflow: "hidden",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/78WIYzX_m98?si=pDTyELSSk0i_Iq78"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Container>
    </>
  );
};

export default YTVideoPlayer;
