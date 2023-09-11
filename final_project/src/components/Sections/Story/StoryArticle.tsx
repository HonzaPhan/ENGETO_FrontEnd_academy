import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

const StoryArticle = (): JSX.Element => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      id="Story"
      sx={{
        mb: isSmallScreen ? "3rem" : "5rem",
        p: "2rem",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ mb: "2rem", letterSpacing: "0.5rem", py: "1rem" }}
      >
        STORY
      </Typography>

      <Typography variant="h5" component="p" mb={3}>
        Ichigo Kurosaki gained the powers of a Soul Reaper through a chance
        encounter. As a Substitute Soul Reaper, Ichigo became caught in the
        turmoil of the Soul Society, a place where deceased souls gather. But
        with help from his friends, Ichigo overcame every challenge to become
        even stronger.
      </Typography>

      <Typography variant="h5" component="p" mb={3}>
        When new Soul Reapers and a new enemy appear in his hometown of
        Karakura, Ichigo jumps back into the battlefield with his Zanpakuto to
        help those in need. Meanwhile, the Soul Society is observing a sudden
        surge in the number of Hollows being destroyed in the World of the
        Living. They also receive separate reports of residents in the Rukon
        District having gone missing.
      </Typography>

      <Typography variant="h5" component="p" mb={3}>
        Finally, the Seireitei, home of the Soul Reapers, come under attack by a
        group calling themselves the Wandenreich. Led by Yhwach, the father of
        all Quincies, the Wandenreich declare war against the Soul Reapers with
        the following message: “Five days from now, the Soul Society will be
        annihilated by the Wandenreich.” The history and truth kept hidden by
        the Soul Reapers for a thousand long years are finally brought to light.
      </Typography>

      <Typography variant="h4" component="p" mb={3} fontWeight={600}>
        All things must come to an end—as Ichigo Kurosaki’s final battle begins!
      </Typography>
    </Container>
  );
};

export default StoryArticle;
