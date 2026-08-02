import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'
import OurValues from '../components/OurValues'
import ContactBar from '../components/ContactBar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <PageHeader title="About Us" />
      <AboutUs />
      <Testimonials />
      <OurValues />
      <ContactBar />
      <Footer />
    </>
  )
}

export default About