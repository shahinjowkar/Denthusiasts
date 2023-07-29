import { Button, Container, TextField } from "@mui/material";
import { Form, Formik } from "formik";

import { Box } from "@mui/system";
import Header from "../components/Header";
import { METHODS } from "http";
import React from "react";

export default function GenPost() {
  return (
    <>
      <Formik
        initialValues={{ m1: "", m2: "", m3: "" }}
        onSubmit={(values) =>
          fetch("http://localhost:8080/", {
            method: "Post",
            //header is important. if you dont set this and pass json the req would be undefined
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              m1: `${values.m1}`,
              m2: `${values.m2}`,
              m3: `${values.m3}`,
            }),
          })
            .then((res) => res.json())
            .then((ok) => console.log(ok))
        }
      >
        {(form) => (
          <Form>
            <Header />
            <Container
              maxWidth={false}
              disableGutters={true}
              sx={{
                m: 0,
                p: 0,
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  minHeight: "80vh",
                  width: "80vw",
                  backgroundColor: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <TextField
                  fullWidth
                  label="Outlined secondary"
                  color="primary"
                  name="m1"
                  onChange={form.handleChange}
                  value={form.values.m1}
                  focused
                  inputProps={{ style: { color: "white" } }}
                />
                <TextField
                  fullWidth
                  label="Outlined secondary"
                  color="primary"
                  focused
                  name="m2"
                  onChange={form.handleChange}
                  value={form.values.m2}
                  inputProps={{ style: { color: "white" } }}
                />
                <TextField
                  fullWidth
                  label="Outlined secondary"
                  color="primary"
                  name="m3"
                  onChange={form.handleChange}
                  value={form.values.m3}
                  inputProps={{ style: { color: "white" } }}
                  focused
                />
                <Button
                  variant="contained"
                  onClick={(e) => {
                    form.handleSubmit();
                  }}
                >
                  submit
                </Button>
              </Box>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
}
