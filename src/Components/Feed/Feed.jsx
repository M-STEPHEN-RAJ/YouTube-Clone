import React, { useEffect, useState } from 'react';
import './Feed.css';
import info_more from '../../assets/info_more.svg';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';
import you from '../../assets/you.png';
import { value_converter } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const [channelImages, setChannelImages] = useState({}); // To store channel profile images

  // Fetch videos
  const fetchData = async () => {
    try {
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&hl=en&maxResults=48&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
      const response = await fetch(videoList_url);
      const result = await response.json();
      setData(result.items);

      const channelIds = result.items.map((item) => item.snippet.channelId);
      fetchChannelImages(channelIds);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch channel profile images
  const fetchChannelImages = async (channelIds) => {
    try {
      const channelList_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(',')}&key=${API_KEY}`;
      const response = await fetch(channelList_url);
      const result = await response.json();

      // Map channelId to profile images
      const images = {};
      result.items.forEach((channel) => {
        images[channel.id] = channel.snippet.thumbnails.high.url;
      });
      setChannelImages(images);
    } catch (error) {
      console.error('Error fetching channel images:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
      <div className="feed">
        {data.map((item, index) => (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={index}>
            <img className="thumbnail" src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="info-container">
              {/* Dynamic Channel Profile Image */}
              <div className="info-left">
                <img
                  className="info-img"
                  src={channelImages[item.snippet.channelId] || you} // Fallback to `you` if image not loaded
                  alt=""                />
              </div>
              <div className="info-middle">
                <h2 className="title">{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
              </div>
              <div className="info-right">
                <img className="info-more" src={info_more} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="design">
        <p>&copy; Designed by <span>M STEPHEN RAJ</span></p>
      </div>
    </>
  );
};

export default Feed;
