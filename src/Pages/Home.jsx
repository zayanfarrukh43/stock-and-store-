import React from 'react'
import HeroSection from '../Component/Home/HeroSection'
import CategorySection from '../Component/Home/CategorySection'
import TrendingSection from '../Component/Home/TrendingSection'
import PromoSection from '../Component/Home/PromoSection'
import NewArrival from '../Component/Home/NewArrival'
import NewsletterSection from '../Component/Home/NewsletterSection'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <TrendingSection />
      <PromoSection />
      <NewArrival />
      <NewsletterSection />
    </div>
  )
}

export default Home
