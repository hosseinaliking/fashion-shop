import React from 'react'

//* Components *// 
import Hero from '../Components/Hero/Hero'
import Category from '../Components/Category/Category'
import DailyWonder from '../Components/DailyWonder/DailyWonder'

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <DailyWonder />
    </div>
  )
}

export default Home