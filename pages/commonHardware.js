import React from "react";
import Desktop from "@/components/Navbar/Desktop";
import Footer from "../components/Footer";
import CommonAndHaedwareCard from "../components/CommonCard";


const commonHardware = () => {
    return (
        <div className='overflow-y-auto w-screen h-screen'>
            <Desktop />
            <CommonAndHaedwareCard />
            <Footer />
        </div>

    )

}

export default commonHardware;