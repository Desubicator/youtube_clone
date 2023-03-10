import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle  } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({ channelDetail }) => ( 
  <Box sx={{ boxShadow: "none", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", height: "225px" ,  width: {xs: "356px", md: "320px"}, margin: "auto", marginTop: "50px"}} >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff"}}>
      <CardMedia 
      image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
      alt={channelDetail?.snippet?.title}
      sx={{width: "180px", height: "180px", borderRadius: "25%", mb: 2, border: "1px solid #e3e3e3"}}
      />
      <Typography variant="h6" fontWeight="bold" sx={{mb: 1, color: "#c1cce5"}}>
        {channelDetail?.snippet?.title}
        <CheckCircle sx={{color: "#8d6d9d", fontSize: 14 , ml: "5px"}} />
      </Typography>
      {channelDetail?.statistics?.subscriberCount && (
        <Typography>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
        </Typography>
      )}
    </CardContent>
    </Link>
  </Box>
  )

export default ChannelCard