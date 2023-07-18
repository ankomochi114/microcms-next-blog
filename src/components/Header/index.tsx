import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
export const Header = () => (
  <Box
    sx={{
      padding: "60px 0",
      marginBottom: "20px",
      backgroundColor: "primary.main",
      color: "white",
    }}
  >
    <Container maxWidth="lg">
      <Typography variant="subtitle1" gutterBottom>
        緑を愛するwebエンジニアの
      </Typography>
      <Typography variant="h4" component="h1">
        Engineering Blog
      </Typography>
    </Container>
  </Box>
);
