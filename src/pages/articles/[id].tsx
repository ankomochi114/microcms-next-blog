import { GetServerSideProps } from "next";
import { client } from "../../libs/client";
import { Article } from "@/types/article";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

type Props = {
  article: Article;
};

export default function BlogId({ article }: Props) {
  return (
    <main>
      <Container className="bg-white" maxWidth="md">
        <Typography variant="h5" gutterBottom>
          {article.title}
        </Typography>
        <p>{dayjs(article.publishedAt).format("YYYY/MM/DD")}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${article.body}`,
          }}
        />
      </Container>
    </main>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "articles",
    contentId: idExceptArray,
  });

  return {
    props: {
      article: data,
    },
  };
};
