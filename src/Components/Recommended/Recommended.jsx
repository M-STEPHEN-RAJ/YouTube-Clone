import React, { useEffect, useState } from 'react'
import './Recommended.css'
import v_more from '../../assets/info_more.svg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Recommended = ({categoryId}) => {

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {

    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=29&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    const res = await fetch(relatedVideo_url);
    const data = await res.json();
    setApiData(data.items);
  } 

  useEffect(() => {
    fetchData();
  },[categoryId])

  return (
    
    <div className="recommended">

        {apiData.map((item, index) => {

            return (

                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                    <div className="side-video-left">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                    </div>
                    <div className="side-video-middle">
                        <h4>{item.snippet.title.slice(0, 45)}...</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p className='side-num'>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </div>
                    <div className="side-video-right">
                        <img src={v_more} alt="" />
                    </div>
                </Link>
            )

        })}

        
    </div>
  )
}

export default Recommended