import React from 'react'
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { Stack } from '@mui/system';

const Sidebar = ({selectedCategory, setSelectedCategory}) => {

  const categories = [
    {id:1, name: "New", icon: <HomeIcon /> },
    {id:2, name: "JS Mastery", icon: <CodeIcon /> },
    {id:3, name: "Coding", icon: <CodeIcon /> },
    {id:4, name: "ReactJS", icon: <CodeIcon /> },
    {id:5, name: "NextJS", icon: <CodeIcon /> },
    {id:6, name: "Music", icon: <MusicNoteIcon /> },
    {id:7, name: "Education", icon: <SchoolIcon /> },
    {id:8, name: "Podcast", icon: <GraphicEqIcon /> },
    {id:9, name: "Movie", icon: <OndemandVideoIcon /> },
    {id:10, name: "Gaming", icon: <SportsEsportsIcon /> },
    {id:11, name: "Live", icon: <LiveTvIcon /> },
    {id:12, name: "Sport", icon: <FitnessCenterIcon /> },
    {id:13, name: "Fashion", icon: <CheckroomIcon /> },
    {id:14, name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
    {id:15, name: "Comedy", icon: <TheaterComedyIcon /> },
    {id:16, name: "Gym", icon: <FitnessCenterIcon /> },
    {id:17, name: "Crypto", icon: <DeveloperModeIcon /> },
  ];

  


  const categoriesElem = categories.map((option) => (
    <button
      key={option.id}
      onClick={() => setSelectedCategory(option.name)}
      className="category-btn"
      style={{
        background: option.name === selectedCategory && "#FC1503",
        color: "white",
      }}
    >
      <span
        style={{ color: option.name === selectedCategory ? "white" : "red" }}
      >
        {option.icon}
      </span>
      <span>{option.name}</span>
    </button>
  ));

  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        overflowY: "auto",
        height: { sm: "auto", md: "95%" },
      }}
    >
      {categoriesElem}
    </Stack>
  );
}

export default Sidebar