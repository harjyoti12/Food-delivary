import React,{useState} from 'react'
import './Home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../App/AppDownload'

const Home = () => {
    const [category, setCategory] = useState('All')
  return (
    <div className='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
