import Categories from "../components/Categories"
import ContactBar from "../components/ContactBar"
import CuisineHighlights from "../components/CuisineHighlights"
import CuisineSpotlight from "../components/CuisineSpotlight"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import WhatWeDo from "../components/WhatweDo"

const Services = () => {
    return(
        <>
        <Navbar />
        <PageHeader title="Services" />
        <CuisineSpotlight />
        <CuisineHighlights />
        <Categories />
        <WhatWeDo />
        <ContactBar />
        <Footer />
        </>
    )
}

export default Services