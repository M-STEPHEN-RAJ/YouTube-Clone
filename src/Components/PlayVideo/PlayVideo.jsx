import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import share from '../../assets/share.svg'
import stephen from '../../assets/profile_img.jpg'
import download from '../../assets/download.svg'
import v_more from '../../assets/info_more.svg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import you from '../../assets/you.png';
import { useParams } from 'react-router-dom'

const PlayVideo = () => {

  const {videoId} = useParams();  

  const [apiData, setApiData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const [channelData, setChannelData] = useState(null);

  const [commentData, setCommentData] = useState([]);

  // Set the maximum length for the preview text
  const maxLength = 370;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLengthComment = 200;
  const [isExpandedComment, setIsExpandedComment] = useState(false);

  const handleToggleComment = () => {
    setIsExpanded(!isExpanded);
  };

  const fetchVideoData = async () => {
    // Fetch Video Data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    const res = await fetch(videoDetails_url);
    const data = await res.json();
    setApiData(data.items[0]);
  }

  const fetchOtherData = async () => {
    // Fetch Channel Data
        try {
            if (apiData && apiData.snippet) {
            const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
            const res = await fetch(channelData_url);
            if (!res.ok) {
                throw new Error('Failed to fetch channel data');
            }
            const data = await res.json();
            setChannelData(data.items[0]);
            } else {
            console.error("apiData or apiData.snippet is missing");
            }
        } catch (error) {
            console.error("Error fetching channel data:", error);
        }

    // Fetch Comment Data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=23&videoId=${videoId}&key=${API_KEY}`
    const res2 = await fetch(comment_url);
    const data2 = await res2.json();
    setCommentData(data2.items);
  }

  useEffect(() => {
    fetchVideoData();
  },[videoId])

  useEffect(() => {
    fetchOtherData();
  },[apiData])

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay></video>         */}
        <iframe src= {`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h3 className='pv-title'>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            
            <div className="channel-right">
                <img className='channel-icon' src={channelData ? channelData.snippet.thumbnails.medium.url : you} alt="" />
                <div className="channel-info">
                    <h4>{apiData ? apiData.snippet.channelTitle : "Channel Name"}</h4>
                    <p>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} subscribers</p>
                </div>
                <div className="info-background subscribe">
                    <p>Subscribe</p>
                </div>
            </div>
            <div className="channel-left">
                <div className="likes-dislikes">
                    <div className="like"><img src={like} alt="" /><p>{value_converter(apiData?apiData.statistics.likeCount:1600)}</p></div>
                    <div className="vr"></div>
                    <div className="dislike"><img src={dislike} alt="" /></div>
                </div>
                <div className="info-background channel-share">
                    <img src={share} alt="" />
                    <p>Share</p>
                </div>
                <div className="info-background channel-download">
                    <img src={download} alt="" />
                    <p>Download</p>
                </div>
                <div className="info-background">
                    <img className='v-more' src={v_more} alt="" />
                </div>
            </div>
        </div>
        
        <div className="vid-describe">
            <div className="vid-info">
                <h5>{apiData?value_converter(apiData.statistics.viewCount):"16K"} views</h5>
                <h5>{apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</h5>
            </div>
            <div className={"vid-description"}>
            {/* Conditionally render sliced description */}
              <p>
                {apiData && isExpanded
                  ? apiData.snippet.description
                  : apiData
                  ? `${apiData.snippet.description.slice(0, maxLength)}`
                  : "Description Here"}
              </p>
            {/* Show "Read More" if the text is sliced */}
              {apiData && apiData.snippet.description.length > maxLength && (
                <p onClick={handleToggle} className={"read-more-container"}>
                  {isExpanded ? "Show less" : "...more"}
                </p>
              )}
            </div>
        </div>
        <div className="comments-section">

            <div className="comment">
                <h3>{apiData ? value_converter(apiData.statistics.commentCount) : 100} Comments</h3>
            </div>
            <div className="my-comments">
                <img src={stephen} alt="" />
                <input type="text" name="" id="" placeholder='Add a comment...'/>
            </div>

                {commentData.map((item,index) => {
                    
                    return (
                        <div key = {index} className="comments">
                            <div className="comments-left">
                                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl || you} alt="" className="user-profile" />
                            </div>
                            <div className="comments-middle">
                                <h6>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>&nbsp;{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h6>
                                {/* Display the comment text */}
                                <p>
                                {isExpandedComment || item.snippet.topLevelComment.snippet.textOriginal.length <= maxLengthComment
                                    ? item.snippet.topLevelComment.snippet.textOriginal
                                    : `${item.snippet.topLevelComment.snippet.textOriginal.slice(0, maxLengthComment)}...`}
                                </p>

                                {/* "Show More" / "Show Less" based on the text length */}
                                {item.snippet.topLevelComment.snippet.textOriginal.length > maxLengthComment && (
                                <p onClick={handleToggleComment} className="read-more-container">
                                    {isExpandedComment ? "Show less" : "...more"}
                                </p>
                                )}
                                <div className="comments-reivew">
                                    <div className="c-likes">
                                        <img src={like} alt="" className="c-like" />
                                        <p>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</p>
                                    </div>
                                    <img src={dislike} alt="" className="c-dislike" />
                                    <div className="reply">
                                        <p>Reply</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-right">
                                <img src={v_more} alt="" className="c-more" />
                            </div>
                         </div>
                     )
                })}
                
                
            </div>


        </div>
  )
}

export default PlayVideo