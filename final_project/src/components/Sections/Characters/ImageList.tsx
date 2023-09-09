import { useState } from "react";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

const ListOfImages = (): JSX.Element => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <Container id="Characters" sx={{ my: "5rem" }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ mb: "2rem", letterSpacing: "0.5rem" }}
      >
        Main Characters
      </Typography>
      <ImageList
        sx={{
          width: "100%",
          height: 500,
          flexDirection: isMdScreen ? "column" : "row",
        }}
        cols={isMdScreen ? 3 : 1}
        rowHeight={500}
        gap={20}
      >
        {photoItemData.map((item, index) => (
          <ImageListItem
            key={item.img}
            sx={{
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: index === hoveredIndex ? "scale(1.1)" : "scale(1.0)",
              transition: "transform 0.2s ease-in-out",
              width: isMdScreen ? "100%" : "auto",
            }}
          >
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Typography variant="h6" component="p" sx={{ textAlign: "center" }}>
              {item.name}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default ListOfImages;

const photoItemData = [
  {
    img: "https://www.looper.com/img/gallery/15-strongest-bleach-characters-ranked-worst-to-best/l-intro-1658158169.jpg",
    name: "Ichigo Kurosaki",
  },
  {
    img: "https://noticias.animeonegai.com/wp-content/uploads/2023/08/Hakka-No-Togame-bankai-bleach-rukia-1-ind.webp",
    name: "Rukia Kuchiki",
  },
  {
    img: "https://staticg.sportskeeda.com/editor/2022/12/0978d-16722018125394-1920.jpg",
    name: "Ishida Uryuu",
  },
  {
    img: "https://anime.atsit.in/th/wp-content/uploads/2022/09/bleach-tybw-e0b980e0b89ce0b8a2e0b895e0b8b1e0b8a7e0b8ade0b8a2e0b988e0b8b2e0b887e0b8aae0b8b1e0b989e0b899-e0b899e0b8b3e0b981e0b8aae0b894.jpg",
    name: "Orihime Inoue",
  },
  {
    img: "https://www.gosugamers.in/wp-content/uploads/2023/07/image5-15.png",
    name: "Sado Yasutora",
  },
  {
    img: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/07/31/2885534747.jpg",
    name: "Renji Abarai",
  },
  {
    img: "https://staticg.sportskeeda.com/editor/2022/12/6584f-16703283246915-1920.jpg",
    name: "Kisuke Urahara",
  },
  {
    img: "https://staticg.sportskeeda.com/editor/2023/08/cb6be-16911299554051-1920.jpg",
    name: "Byakuya Kuchiki",
  },
  {
    img: "https://i.pinimg.com/originals/e4/0f/e0/e40fe028c7ad9206f09061469541859f.jpg",
    name: "Toshiro Hitsugaya",
  },
  {
    img: "https://mangathrill.com/wp-content/uploads/2023/08/Collage-Maker-20-Aug-2023-07-16-PM-8123.jpg",
    name: "Zaraki Kenpachi",
  },
  {
    img: "https://cdn.epicstream.com/images/ncavvykf/epicstream/b5ee8d19de37687d7d8ec59b665f9bf17d93fe97-1275x652.jpg",
    name: "Yhwach",
  },
  {
    img: "https://staticg.sportskeeda.com/editor/2022/11/89ece-16685456811283-1920.jpg",
    name: "Aizen Sosuke",
  },
];
