import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../Assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='ExploreMenu' id='ExploreMenu'>
      <h1>Explore our menu</h1>
      <p className='ExploreMenu-text'>Choose from a diverse menu featuring a detectable array of dishes crafted with the finest inngredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="ExploreMenu-list">
        {menu_list.map((item,i)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={i} className="ExploreMenu-list-item">
                    <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
