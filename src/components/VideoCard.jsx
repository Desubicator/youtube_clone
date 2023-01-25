import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle, NoEncryption } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({ video: {id: {videoId}, snippet} }) => {
  
  return (
    <Card sx={{width: { md: "320px", xs: "100%" }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{textDecoration: "none"}}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url} 
        alt={snippet?.title} 
        sx={{width: 358, height: 180}} />
        </Link>
        <CardContent sx={{backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" sx={{color: "#fff", fontWeight: "bold", mb: 1}}>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" sx={{color: "gray", fontWeight: "bold", mb: 1}}>{snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{color: "gray", fontSize: "12", ml: "5px"}} />
            </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard