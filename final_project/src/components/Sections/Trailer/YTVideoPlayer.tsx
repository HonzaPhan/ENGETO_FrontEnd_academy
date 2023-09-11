import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const YTVideoPlayer = (): JSX.Element => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Container
        id="Trailer"
        sx={{
          px: "2rem",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h3"
            sx={{ mb: "2rem", letterSpacing: "0.5rem", py: "1rem" }}
          >
            TRAILER
          </Typography>
        </Box>
      </Container>
      <Container
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: "0",
          overflow: "hidden",
          marginBottom: isSmallScreen ? "3rem" : "5rem",
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
