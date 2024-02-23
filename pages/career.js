import React from "react";
import Desktop from "@/components/Navbar/Desktop";
import Footer from "../components/Footer";
import CareerCard from "../components/CareerCard";


const career = () => {
    return (
        <div className='overflow-y-auto h-screen w-screen'>
                       <Desktop />
            <CareerCard />
            <Footer />
        </div>

    )

}

export default career;