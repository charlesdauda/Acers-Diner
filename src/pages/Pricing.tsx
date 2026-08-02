import Bonuses from "../components/Bonuses"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import SandwichesFeature from "../components/SandwichesFeature"

const Pricing = () => {
    return (
        <>
        <Navbar />
        <PageHeader title="Pricing" />
        <SandwichesFeature />
        <Bonuses />
        <Footer />
        </>
    )
}

export default Pricing