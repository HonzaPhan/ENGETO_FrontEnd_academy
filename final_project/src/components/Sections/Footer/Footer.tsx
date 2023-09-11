import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Footer = (): JSX.Element => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography
            component="p"
            color="inherit"
            textAlign="center"
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            &copy; Final Project: Long Phan
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
