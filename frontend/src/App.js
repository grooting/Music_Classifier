import "./App.css";
import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import placeholder from "./assets/adrian-regeci-SAS0lq2QGLs-unsplash.jpg";
import axios from "axios";

const Input = styled("input")({
  display: "none",
});

function App() {
  const [selectedFile, setSelectedFile] = useState();

  return (
    <>
      <Stack direction="row" backgroundColor="#222831" height="100vh">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          backgroundColor="#393E46"
          width="60%"
        >
          <Typography variant="h5" color="white">
            Music Classifier
          </Typography>
          <label>
            <Input
              type="file"
              onChange={(event) => {
                setSelectedFile(event.target.files[0]);
              }}
            />
            <Button
              variant="contained"
              component="span"
              startIcon={<AudioFileIcon />}
            >
              Upload
            </Button>
          </label>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              // post if have selected file
              if (selectedFile) {
                axios
                  .post("http://localhost:5000", selectedFile)
                  .then(() => {
                    console.log("SUCCESS");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            }}
          >
            Classify
          </Button>
        </Stack>
        <img src={placeholder} alt="music" />
      </Stack>
    </>
  );
}

export default App;
