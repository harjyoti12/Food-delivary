import React from 'react'
import './AppDownload.css'
import { assets } from '../Assets/assets'
const AppDownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
