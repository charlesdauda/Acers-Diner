import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import QuickInfo from '../components/QuickInfo'
import FoodShowcase from '../components/FoodShowCase'
import FoodPreparation from '../components/FoodPreparation'
import FollowUs from '../components/FollowUs'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickInfo />
      <FoodShowcase />
      <FoodPreparation />
      <FollowUs />
      <Footer />
    </>
  )
}

export default Home