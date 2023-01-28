import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { Sidebar, Videos } from "./"

import { fetchFromAPI } from "../utils/fetchFromAPI"


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory] );

  return (
    <Stack sx={{ flexDirection:{sx: "column", md: "row" }}} >
      <Box sx={{ height: {sx: "auto", md: "92vh"}, borderRight: "3px solid #8d6d9d", px: {sx: 0, md: 2} }} >
        <Sidebar 
        
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
        
        />

        <Typography className="copyright" variant="body2" sx={{mt: 1.5, color:"#c1cce5"}}>
          Copyright © 2023 by FP
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "#c1cce5"}}>
        {selectedCategory} <span style={{color: "#f6d68b"}}>
          Videos
        </span>
      </Typography>
      <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed