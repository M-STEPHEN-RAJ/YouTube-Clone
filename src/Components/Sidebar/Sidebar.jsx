import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import shorts from '../../assets/shorts.svg'
import subscription from '../../assets/subscription.png'
import you from '../../assets/you.png'
import right_arrow from '../../assets/right.png'
import playlist from '../../assets/playlist.png'
import history from'../../assets/history.png'
import your_video from '../../assets/your_video.png'
import watch_later from '../../assets/watch_later.png'
import likes from '../../assets/like.svg'
import stephen from '../../assets/profile_img.jpg'
import a2d from '../../assets/a2d.jpg'
import vj_siddhu from '../../assets/vj_siddhu.jpg'
import epaphra from '../../assets/epaphra.jpg'
import all_subscriptions from '../../assets/all_subscriptions.png'
import game from '../../assets/game.png'
import automobile from '../../assets/automobile.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/technology.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import settings from '../../assets/settings.svg'
import report from '../../assets/report.svg'
import help from '../../assets/help.svg'
import feedback from '../../assets/feedback.svg'

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="sortcut-links">

            <div className={`side-link ${category === 0 ? "s-active" : ""}`} onClick={() => setCategory(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className="side-link">
                <img src={shorts} alt="" /><p>Shorts</p>
            </div>
            <div className="side-link">
                <img src={subscription} alt="" /><p>Subscriptions</p>
            </div>
            <div className="side-link you1">
                <img src={you} alt="" /><p>You</p>
            </div>

            <hr className='hr-1' />

            <div className="middle">

              <div className="side-link">
                <p className='you'>You</p><img className='you-img' src={right_arrow} alt="" />
              </div>

              <div className="side-link">
                <img src={history} alt="" /><p>History</p>
              </div>

              <div className="side-link">
                <img src={playlist} alt="" /><p>Playlists</p>
              </div>

              <div className="side-link">
                <img src={your_video} alt="" /><p>Your videos</p>
              </div>

              <div className="side-link">
                <img src={watch_later} alt="" /><p>Watch later</p>
              </div>

              <div className="side-link">
                <img src={likes} alt="" /><p>Liked videos</p>
              </div>

            </div>

            <hr className='hr-2' />

            <div className="subscribed-list">
                <h3>Subscriptions</h3>
                <div className="side-link">
                    <img src={stephen} alt="" /><p>M Stephen Raj</p>
                </div>
                <div className="side-link">
                    <img src={a2d} alt="" /><p>A2D Channel</p>
                </div>
                <div className="side-link">
                    <img src={vj_siddhu} alt="" /><p>Vj Siddhu Vlogs</p>
                </div>
                <div className="side-link">
                    <img src={epaphra} alt="" /><p>Explore with Epa...</p>
                </div>
                <div className="side-link">
                    <img src={all_subscriptions} alt="" /><p>All subscriptions</p>
                </div>
            </div>

            <hr className='hr-3' />

            <div className="explore-list">
              <h3>Explore</h3>
                <div className={`side-link ${category === 20 ? "s-active" : ""}`} onClick={() => setCategory(20)}>
                    <img src={game} alt="" /><p>Gaming</p>
                </div>
                <div className={`side-link ${category === 2 ? "s-active" : ""}`} onClick={() => setCategory(2)}>
                    <img src={automobile} alt="" /><p>Automobiles</p>
                </div>
                <div className={`side-link ${category === 17 ? "s-active" : ""}`} onClick={() => setCategory(17)}>
                    <img src={sports} alt="" /><p>Sports</p>
                </div>
                <div className={`side-link ${category === 24 ? "s-active" : ""}`} onClick={() => setCategory(24)}>
                    <img src={entertainment} alt="" /><p>Entertainment</p>
                </div>
                <div className={`side-link ${category === 28 ? "s-active" : ""}`} onClick={() => setCategory(28)}>
                    <img src={tech} alt="" /><p>Technology</p>
                </div>
                <div className={`side-link ${category === 10 ? "s-active" : ""}`} onClick={() => setCategory(10)}>
                    <img src={music} alt="" /><p>Music</p>
                </div>
                <div className={`side-link ${category === 22 ? "s-active" : ""}`} onClick={() => setCategory(22)}>
                    <img src={blogs} alt="" /><p>Blogs</p>
                </div>
                <div className={`side-link ${category === 25 ? "s-active" : ""}`} onClick={() => setCategory(25)}>
                    <img src={news} alt="" /><p>News</p>
                </div>
            </div>

            <hr className='hr-4' />

            <div className="about-list">
                <div className="side-link">
                    <img src={settings} alt="" /><p>Settings</p>
                </div>
                <div className="side-link">
                    <img src={report} alt="" /><p>Report History</p>
                </div>
                <div className="side-link">
                    <img src={help} alt="" /><p>Help</p>
                </div>
                <div className="side-link">
                    <img src={feedback} alt="" /><p>Send Feedback</p>
                </div>
            </div>

            <hr className='hr-5' />

            <p className='footer'>© 2025 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>M STEPHEN RAJ</span></p>

        </div>
        
    </div>
  )
}

export default Sidebar