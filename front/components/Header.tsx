import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Box,
  Button,
  Hidden,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";

import { Container } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Height } from "@mui/icons-material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import logo from "../public/dentalLogo.png";
import { wrap } from "module";

const layer1 = " #121212";
const layer2 = "#1e1e1e";
const layer3 = "#272727";
function Header() {
  //TODO FOLLOW DOCS TO ADD WHITE ON TOP FOR SHADOWS
  return (
    <Container maxWidth={false} sx={{ bgcolor: "#f0f4f4", m: 0, p: 0 }}>
      <Box
        height={"80px"}
        sx={{
          maxWidth: "900px",
          minWidth: "375px",
          m: "auto",
          px: "20px",
          color: "white",
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <GitHubIcon href="#" sx={{ color: "white" }}></GitHubIcon>
          <LinkedInIcon href="#" sx={{ color: "white" }}></LinkedInIcon>
          <Button
            href="/GenPost"
            sx={{ color: "black", backgroundColor: "white" }}
          >
            {" "}
            Auto Generate
          </Button>
        </Box> */}
        {/* <Box sx={{ height: "75px", width: "75px" }}> */}
        <Link href={"/"}>
          <Box
            sx={{
              "&hover": { cursor: "pointer" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "75px",
              width: "75px",

              pl: "6%",
              cursor: "pointer",
              // backgroundPositionY: "100px",
              backgroundImage: `url(${logo.src})`,
              backgroundSize: "cover",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundPosition: "center",
            }}
          />
        </Link>
        <IconButton
          sx={{ ml: "auto" }}
          href="mailto:Soorena.barmaky@alum.utoronto.ca"
        >
          <EmailIcon color="action" fontSize="large" target="_blank" />
        </IconButton>
        <IconButton
          href="https://instagram.com/pre_denthusiasts?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <InstagramIcon color="action" fontSize="large" />
        </IconButton>
        <Button
          variant="contained"
          sx={{
            color: "white",
            px: 6,
            bgcolor: "black",
            "&:hover": {
              bgcolor: "#f0f4f4",
              color: "black",
            },
          }}
          href={"/Info"}
          size={"large"}
        >
          {" "}
          About Us
        </Button>
      </Box>
      {/* </Box> */}
    </Container>
  );
}

export default Header;
