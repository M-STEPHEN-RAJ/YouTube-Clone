import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.svg'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.svg'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/profile_img.jpg'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>

        <div className="nav-left felx-div">
            <div className="menu" onClick={()=>setSidebar(prev=>prev===false?true:false)} >
              <img className='menu-icon' src={menu_icon} alt="" />
            </div>
            
            <Link to={"/"}><img className='logo' src={logo} alt="" /></Link>
        </div>

        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
              <input type="text" placeholder='Search'/>
              <div className="search-icon">
                <img src={search_icon} alt="" />
              </div>              
            </div>
        </div>

        <div className="nav-right flex-div">
            <div className="create">
              <img src={upload_icon} alt="" />
              <p>Create</p>
            </div>

            <div className="notification-icon">
              <img className='notification' src={notification_icon} alt="" />
            </div>        
            
            <img className='user-icon' src={profile_icon} alt="" />
        </div>

    </nav>
  )
}

export default Navbar