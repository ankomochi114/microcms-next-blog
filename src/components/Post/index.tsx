import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import { Article } from "@/types/article";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Stack from "@mui/material/Stack";
type PostProps = {
  article: Article;
};

export const Post = ({ article }: PostProps) => {
  return (
    <Card key={article.id}>
      <CardActionArea href={`/articles/${article.id}`}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {dayjs(article.publishedAt).format("YYYY/MM/DD")}
          </Typography>
          <Typography variant="h6" component="div">
            {article.title}
          </Typography>
          <Grid
            container
            spacing={0.2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Stack direction="row" spacing={0.2} alignItems="center">
                <LocalOfferIcon sx={{ fontSize: 16 }} />
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="span"
                >
                  {article.category.title}
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <EastIcon color="primary" />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
