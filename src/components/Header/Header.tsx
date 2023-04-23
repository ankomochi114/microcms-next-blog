import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
export const Header = () => (
  <Box
    sx={{
      padding: "60px 0",
      marginBottom: "20px",
      backgroundColor: "primary.dark",
    }}
  >
    <Container maxWidth="md">
      <Typography variant="subtitle1" gutterBottom>
        備忘録
      </Typography>
      <Typography variant="h4" component="h1">
        のほほんエンジニアブログ
      </Typography>
    </Container>
  </Box>
);
