import React from "react";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Desktop from "@/components/Navbar/Desktop";

const about = () => {
    return (
        <div className='overflow-y-auto h-screen'>
            <Desktop />
            <AboutUs />
            <Footer />
        </div>

    )

}

export default about;