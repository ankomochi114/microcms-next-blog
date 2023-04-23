import Link from "next/link";
import dayjs from "dayjs";
import type { GetStaticProps, NextPage } from "next";
import { client } from "../libs/client";
import { Article } from "@/types/article";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { CardActionArea } from "@mui/material";

type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {articles.map((article) => (
          <Grid xs={6} key={article.id}>
            <Card>
              <CardActionArea href={`/articles/${article.id}`}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {dayjs(article.publishedAt).format("YYYY/MM/DD")}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {article.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "articles" });

  return {
    props: {
      articles: data.contents,
    },
  };
};
