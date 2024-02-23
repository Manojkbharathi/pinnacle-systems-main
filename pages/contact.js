import React from "react";
import Desktop from "@/components/Navbar/Desktop";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";


const contactUs = () => {
    return (
        <div className='overflow-y-auto h-screen w-screen'>
            <Desktop />
            <ContactUs />
            <Footer />
        </div>

    )

}

export default contactUs;