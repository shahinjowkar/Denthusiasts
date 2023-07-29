import { Box, Button, Container, Typography } from "@mui/material";

import Header from "../components/Header";
import soorena from "../public/soorena.jpeg";
import { useState } from "react";

export default function Info() {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Header></Header>
      <Container
        maxWidth={false}
        sx={{ bgcolor: "black", m: 0, p: 0, height: "100vh" }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "65%",
              width: "80%",
              display: "flex",

              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                Width: "700px",
                maxWidth: "700px",
              }}
            >
              <Typography
                color={"white"}
                variant={"h5"}
                fontFamily={"Roboto,sans-serif"}
                fontWeight={400}
                fontSize={"1.25rem"}
                letterSpacing={"4px"}
              >
                Soorena Barmaky
              </Typography>
              <Typography
                color={"white"}
                fontSize={"2rem"}
                fontFamily={"Abril Fatface"}
                fontWeight={"400"}
                textAlign={"right"}
                variant={"h2"}
              >
                Author and Owner of Denthusiast Group
              </Typography>
              <Typography
                color={"white"}
                fontSize={"1.125rem"}
                fontFamily={"Abril Fatface"}
                variant={"body2"}
                // textAlign={"justify"}
                pt={2}
              >
                I have a bachelor of science (BSc) degree from University of
                Toronto. My passion in dentistry started when I was a kid and
                stepped into a dental office for the first time. However, during
                my undergraduate program, my interest found a more logical form.
                I was intrigued by the interactive nature of dentistry, and that
                it constantly requires surgical operations which are hands-on
                procedures and demand having close contact with patients.
              </Typography>
              <Typography
                color={"white"}
                fontSize={"1.125rem"}
                fontFamily={"Abril Fatface"}
                variant={"body2"}
                // textAlign={"justify"}
                pt={2}
              >
                With a help of a team of interdisciplinary students, I created
                this scientific journal, which summarizes the latest and most
                interesting articles and innovations in dentistry using
                state-of-the-art A.I. system. All articles are hand-picked; and
                all summaries are fact-checked, peer reviewed, and taylored
                towards general audience with no background in dentistry. Source
                of the original articles can be found at the buttom of each
                page.
              </Typography>
              <Typography
                color={"white"}
                fontSize={"1.125rem"}
                fontFamily={"Abril Fatface"}
                variant={"body2"}
                // textAlign={"justify"}
                pt={2}
              >
                We also run a social media club on Instagram, @pre_denthusiasts,
                throug which we introduce different dental schools and their
                requirements, answer common DAT questions, and help pre-dental
                students practice their interview skills. As a pre-dental
                student myself, I am aware of the lack of guidance for students
                interested in following dentistry, and our team hopes to close
                this gap by providing valuable information in our page.
              </Typography>
              {/* <Button
                variant={"text"}
                sx={{
                  color: "#f1c50e",
                  mt: 5,
                }}
                onClick={() => setReadMore(!readMore)}
              >
                read more
              </Button> */}
            </Box>
            <Box
              sx={{
                // backgroundImage:""
                bgcolor: "black",
                ml: 7,
                backgroundImage: `url(${soorena.src})`,
                backgroundSize: "cover",
                justifyContent: "center",
                borderRadius: "100%",
                height: "300px",
                width: "300px",
                minWidth: "300px",
              }}
            ></Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
