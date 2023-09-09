import { Container, Typography, useMediaQuery } from "@mui/material";

const IntroArticle = (): JSX.Element => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  
  return (
    <Container id="Introduction" sx={{ my: "5rem", p: "2rem"}}>
      {isSmallScreen ? (
        <Typography
          component="h1"
          variant="h2"
          sx={{ mb: "2rem", letterSpacing: "0.2rem" }}
        >
          BLEACH
        </Typography>
      ) : (
        <Typography
          component="h1"
          variant="h1"
          sx={{ mb: "3rem", letterSpacing: "0.2rem" }}
        >
          BLEACH
        </Typography>
      )}
      <Typography component="p" variant="h5" mb={3}>
        is a captivating and iconic anime series that has left an indelible mark
        on the world of Japanese animation and has garnered a massive global
        fanbase. Created by <strong>Tite Kubo</strong>, this thrilling tale
        blends supernatural elements, intense battles, and intricate character
        development into a captivating narrative that has enthralled viewers for
        years.
      </Typography>
      <Typography component="p" variant="h5" mb={3}>
        Set in a world where souls, spirits, and monstrous creatures known as
        Hollows coexist, "Bleach" follows the adventures of Ichigo Kurosaki, a
        teenager with the unique ability to see ghosts. But Ichigo's life takes
        an unexpected turn when he inadvertently acquires the powers of a Soul
        Reaper – a celestial being responsible for guiding the souls of the
        deceased to the afterlife and protecting the living from malevolent
        spirits. With his newfound abilities, Ichigo embarks on a quest to
        defend his world from dark forces, uncover hidden secrets, and confront
        his own inner demons.
      </Typography>
      <Typography component="p" variant="h5" mb={3}>
        As he forms bonds with other Soul Reapers and faces formidable
        adversaries, "Bleach" takes viewers on a thrilling journey filled with
        epic battles, emotional depth, and a richly woven tapestry of mythology.
        Join us as we delve into the enchanting world of "Bleach," where the
        boundary between the living and the dead blurs, and where the struggle
        for justice and redemption knows no bounds.
      </Typography>
    </Container>
  );
};

export default IntroArticle;
