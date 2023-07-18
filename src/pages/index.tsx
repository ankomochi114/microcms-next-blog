import type { GetStaticProps } from "next";
import { client } from "../libs/client";
import { Article } from "@/types/article";
import { Post } from "@/components/Post";
import Grid from "@mui/material/Grid";

type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <Grid container spacing={4}>
      {articles.map((article) => (
        <Grid item key={article.id} xs={12}>
          <Post article={article} />
        </Grid>
      ))}
    </Grid>
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
