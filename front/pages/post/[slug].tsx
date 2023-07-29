import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { sanityClient, urlFor } from "../../sanity";

import CommentForm from "../../components/CommentForm";
import { Container } from "@mui/system";
import { Context } from "vm";
import { GetStaticProps } from "next";
import Header from "../../components/Header";
import Image from "next/image";
import PortableText from "react-portable-text";
import { Post } from "../../typing";
import React from "react";
import imageUrl from "../../public/mainHero.jpg";
import { relative } from "path";
import { useFormik } from "formik";

interface props {
  post: Post;
}

interface IFormInput {
  //to make it optional add a question makrk before it
  _id: string;
  name: string;
  email: string;
  comment: string;
}
export default function post({ post }: props) {
  const layer2 = "#1e1e1e";

  const layer3 = "#272727";
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Header />
      <Box sx={{ position: "relative", height: { xs: 150, md: 250 } }}>
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).url()!}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        ) : (
          <Image
            src={`${imageUrl.src}`}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        )}
      </Box>
      <Container maxWidth={"xl"}>
        <Box
          borderLeft={1}
          borderRight={1}
          sx={{
            bgcolor: "inherit",
            mx: 3,
            mt: 3,
            px: 3,
            borderColor: "black",
            borderWidth: "3px",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography color={"black"} variant="h4">
              {post.title}
            </Typography>
            <Typography color={"black"} variant="h5">
              {post.description}
            </Typography>

            <Typography color={"black"} variant="body2">
              {post?.body && (
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  content={post.body}
                  serializers={{
                    h1: (props: any) => (
                      <h1 className="text-2xl font-bold my-5" {...props} />
                    ),
                    h2: (props: any) => (
                      <h1 className="text-xl font-bold my-5" {...props} />
                    ),
                    li: ({ children }: any) => (
                      <li className="ml-4 list-disc">{children}</li>
                    ),
                    link: ({ href, children }: any) => (
                      <a href={href} className="text-blue-500 hover:underlune">
                        {children}
                      </a>
                    ),
                  }}
                />
              )}
            </Typography>
            {post?.plainBody && (
              <Typography color={"black"} variant="body2">
                {post.plainBody}
              </Typography>
            )}
          </ThemeProvider>
        </Box>
      </Container>
    </>
    // <main>
    //   <Header />
    //   <img
    //     className="w-full h-40 object-cover"
    //     src={urlFor(post.mainImage).url()}
    //     alt=""
    //   />
    //   <article className="max-w-3xl mx-auto p-5">
    //     <h1 className="text-3xl mt-10 mb-3 ">{post.title}</h1>
    //     <h2 className="text-xl font-light text-gray-500 mb-2">
    //       {post.description}
    //     </h2>

    //     <div className="flex items-center space-x-2">
    //       <img
    //         className="h-10 w-10 rounded-full"
    //         src={urlFor(post.author.image).url()}
    //       />
    //       <p className="font-extralight text-sm items-center ">
    //         Blog post By{" "}
    //         <span className="text-green-600">{post.author.name} </span>-
    //         published at
    //       </p>
    //     </div>
    //     <div>
    // <PortableText
    //   dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
    //   projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
    //   content={post.body}
    //   serializers={{
    //     h1: (props: any) => (
    //       <h1 className="text-2xl font-bold my-5" {...props} />
    //     ),
    //     h2: (props: any) => (
    //       <h1 className="text-xl font-bold my-5" {...props} />
    //     ),
    //     li: ({ children }: any) => (
    //       <li className="ml-4 list-disc">{children}</li>
    //     ),
    //     link: ({ href, children }: any) => (
    //       <a href={href} className="text-blue-500 hover:underlune">
    //         {children}
    //       </a>
    //     ),
    //   }}
    // />
    //     </div>
    //   </article>
    //   <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />

    //   <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2">
    //     <h3 className="text-4xl">comments</h3>
    //     <hr className="pb-2"></hr>
    //     {post.comments.map((comment) => (
    //       <div key={comment._id}>
    //         <p>
    //           <span className="text-yellow-500">{comment.name} :</span>{" "}
    //           {comment.comment}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    //   <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />

    //   <CommentForm id={post._id} />
    // </main>
  );
}
//allows next.js which roots need to be buiilt first
export const getStaticPaths = async () => {
  const query = `*[_type == "posts"]{
         _id, 
        slug {
            current
        }
     }
    `;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    param: { slug: post.slug.current },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
// what is this param : context
export const getStaticProps: GetStaticProps = async ({ params }: Context) => {
  const query = ` *[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author -> {
    name,
    image
  },
  'comments' : *[_type == "comment" && post._ref == ^._id && approved == true],
  description,
  mainImage,
  slug,
  body,
  plainBody
  }`;
  const post = await sanityClient.fetch(query, { slug: params?.slug });
  return {
    props: { post },
    revalidate: 60, // to update it
  };
};
