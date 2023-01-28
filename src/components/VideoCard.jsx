import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({ video: {id: {videoId}, snippet} }) => {
  
  return (
    <Card sx={{width: { xs: "100%", sm: "358px" , md: "320px" }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{textDecoration: "none"}}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url} 
        alt={snippet?.title} 
        sx={{width: {xs: "100%", sm: "358px", md:"320px" }, height: 180}} />
        </Link>
        <CardContent sx={{backgroundColor: "rgb(40,25,40)", height: "80px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" sx={{color: "#c1cce5", fontWeight: "bold", mb: 1}}>{decodeURIComponent(snippet?.title.slice(0, 70).replaceAll("&#39;", "'").replaceAll("&amp;", "&")) || demoVideoTitle.slice(0, 70)}</Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" sx={{color: "#c1cce5", fontWeight: "bold", mb: 1}}>{decodeURIComponent(snippet?.channelTitle.slice(0, 70).replaceAll("&#39;", "'").replaceAll("&amp;", "&")) || demoChannelTitle.slice(0, 70)}
            <CheckCircle sx={{color: "#8d6d9d", fontSize: 14 , ml: "5px"}} />
            </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard