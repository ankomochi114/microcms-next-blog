import { ReactElement } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const sidebar = {
  title: "tororo",
  description:
    "エンジニア初心者のtororoがmicroCMS x Reactの練習用に作ったblogです。",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Container maxWidth="lg">
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Grid item xs={12} md={8}>
          {children}
        </Grid>
        <Sidebar
          name={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </Container>
  </>
);
