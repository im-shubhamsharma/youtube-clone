import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {useParams} from "react-router-dom"

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box sx={{ minWidth: "88%", height: "90vh", overflowY: "auto", margin:"auto" }}>
      <Typography variant="h4" mb={2} sx={{ color: "white" }}>
        Search Result For: <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
