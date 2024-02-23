import React from "react";
import Desktop from "@/components/Navbar/Desktop";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";


const erpServices = () => {
    return (
        <div className='overflow-y-auto w-screen h-screen'>
            <Desktop />
            <ProductCard/>
            <Footer />
        </div>

    )

}

export default erpServices;