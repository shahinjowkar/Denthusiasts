import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  ThemeProvider,
  Typography,
  createTheme,
  gridClasses,
  responsiveFontSizes,
} from "@mui/material";
import { sanityClient, urlFor } from "../sanity";

import Body from "../components/Body";
import { Container } from "@mui/system";
// import type { NextPage } from 'next'
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "next/image";
import { Key } from "@mui/icons-material";
import Link from "next/link";
import { Post } from "../typing";
import React from "react";
import { async } from "rxjs";
import { blue } from "@mui/material/colors";
import card from "../components/Card";
import imageUrl from "../public/mainHero.jpg";
// import img from "/../public/25336.jpg";
import post from "./post/[slug]";
import { relative } from "path";
import { transform } from "typescript";

const layer1 = " #121212";
const layer2 = "#1e1e1e";
const layer3 = "#272727";
let theme = createTheme();
theme = responsiveFontSizes(theme);
export interface Props {
  posts: [Post];
}
export default function Home({ posts }: Props) {
  return (
    <>
      <Header />

      <Hero />
      <Container maxWidth={false} sx={{ m: 0, p: 0 }}>
        <Container maxWidth={"lg"}>
          <Box
            sx={{
              mt: 8,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px,1fr))",
              gap: 3,
            }}
          >
            {posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <Card
                  sx={{
                    bgcolor: `${layer2}`,
                    height: "400px",
                    overflow: "scroll",
                  }}
                >
                  <CardActionArea>
                    <Box sx={{ m: 0, p: 0, overflow: "hidden" }}>
                      {post.mainImage ? (
                        <CardMedia
                          component="img"
                          height="200"
                          image={`${urlFor(post.mainImage).url()!}`}
                          alt="green iguana"
                          sx={[{ overflow: "hidden", objectFit: "cover" }]}
                        />
                      ) : (
                        <CardMedia
                          component="img"
                          height="200"
                          image={`${imageUrl.src}`}
                          alt="green iguana"
                          sx={[{ overflow: "hidden", objectFit: "cover" }]}
                        />
                      )}
                    </Box>
                    <CardContent>
                      <ThemeProvider theme={theme}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          color="white"
                        >
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="white">
                          {post.description}
                        </Typography>
                      </ThemeProvider>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            ))}
          </Box>
        </Container>
      </Container>
    </>
  );
}

//SSR(now his page is being built onthe server first with the props we query from the cms)
export async function getServerSideProps() {
  //check how you did it in the demo project
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{
    image,
    name
  },
  description,
  mainImage,
  slug
}`;
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
}
