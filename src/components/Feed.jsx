import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import {Sidebar, Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

   const [selectedCategory, setSelectedCategory] = useState('New');
   const [videos, setVideos] = useState([])

   useEffect(() => {
     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
         .then((data) => setVideos(data.items))
   }, [selectedCategory]);

  return (
    <Stack display="flex" direction={{ sm: "row", md: "col" }}>
      <Container
        sx={{
          maxWidth: { sm: "auto", md: "11%" },
          height: { sm: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography variant="body2" sx={{ color: "#fff", fontSize: "12px" }}>
          Copyright 2022 Wolfee Media
        </Typography>
      </Container>
      {/* End of Sidebar */}

      <Container sx={{ minWidth: "88%", height: "90vh", overflowY: "auto" }}>
        <Typography variant="h4" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Stack>
  );
};

export default Feed;
