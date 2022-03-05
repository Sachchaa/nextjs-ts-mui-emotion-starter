import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";

const Wrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
}));

const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header variant="h2" sx={{}}>
          This is a sample text!
        </Header>
      </Wrapper>
    </>
  );
};

export default Home;
