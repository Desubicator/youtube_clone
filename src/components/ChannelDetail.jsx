import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { videos, ChannelCard, Videos } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id]);

  return (

    <Box minHeight="95vh" >
      <Box>
        <div style={{background: "linear-gradient(180deg, rgba(164,148,188,1) 10%, rgba(193,204,229,1) 90%)", zIndex: 10, height: "225px"}}/>
        <ChannelCard channelDetail={channelDetail} marginTop= "-175px" />
      </Box>
      <Box display="flex" p="2" marginTop="35px"> 
        <Box sx={{ mr: {sm: "100px"} }} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}



export default ChannelDetail