import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetails = () => {
  const { id } = useParams();

  useEffect(() => {
     fetchFromAPI(`channels?part=snippet&id=${id}`)
  }, []);

  return <div>ChannelDetails</div>;
};

export default ChannelDetails;
