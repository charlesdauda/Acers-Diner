import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import ContactForm from "../components/ContactForm"
import ContactBar from "../components/ContactBar"
import Footer from "../components/Footer"
import LocationMap from "../components/LocationMap"

const Contact = () => {
    return (
        <>
        <Navbar />
        <PageHeader title= "Contact" />
        <LocationMap />
        <ContactForm />
        <ContactBar />
        <Footer />
        </>
    )
}
export default Contact