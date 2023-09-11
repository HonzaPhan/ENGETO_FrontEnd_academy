import { useState } from "react";
import {
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ListOfImages = (): JSX.Element => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <>
      <Container id="Characters">
        <Typography
          variant="h3"
          component="h3"
          sx={{ mb: "2rem", letterSpacing: "0.5rem", p: "1rem" }}
        >
          Main Characters
        </Typography>
      </Container>
      <Box
        sx={{
          backgroundImage: `url("https://theilluminerdi.com/wp-content/uploads/2023/05/BLE_TYBW_Cover.png")`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "80vh",
          overflow: "auto",
          mb: isSmallScreen ? "3rem" : "5rem",
        }}
      >
        <Container
          sx={{
            my: "5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {photoItemData.map((item, index) => (
            <Card
              key={item.img}
              sx={{
                width: isSmallScreen ? "100%" : "30%",
                marginBottom: "2rem",
                position: "relative",
                overflow: "visible",
                transform: index === hoveredIndex ? "scale(1.1)" : "scale(1.0)",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <CardMedia
                component="img"
                height="500"
                image={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.name}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default ListOfImages;

const photoItemData = [
  {
    img: require("../../../assets/kurosaki-ichigo.jpg"),
    name: "Ichigo Kurosaki",
  },
  {
    img: require("../../../assets/kuchiki-rukia.jpg"),
    name: "Rukia Kuchiki",
  },
  {
    img: require("../../../assets/ishida-uryuu.jpg"),
    name: "Ishida Uryuu",
  },
  {
    img: require("../../../assets/inoue-orihime.jpg"),
    name: "Orihime Inoue",
  },
  {
    img: require("../../../assets/yasutora-sado.jpg"),
    name: "Sado Yasutora",
  },
  {
    img: require("../../../assets/abarai-renji.jpg"),
    name: "Renji Abarai",
  },
  {
    img: require("../../../assets/kisuke-urahara.jpg"),
    name: "Kisuke Urahara",
  },
  {
    img: require("../../../assets/kuchiki-byakuya.jpg"),
    name: "Byakuya Kuchiki",
  },
  {
    img: require("../../../assets/hitsugaya-toshiro.jpg"),
    name: "Toshiro Hitsugaya",
  },
  {
    img: require("../../../assets/zaraki-kenpachi.jpg"),
    name: "Zaraki Kenpachi",
  },
  {
    img: require("../../../assets/yhwach.jpg"),
    name: "Yhwach",
  },
  {
    img: require("../../../assets/sosuke-aizen.jpg"),
    name: "Aizen Sosuke",
  },
];
