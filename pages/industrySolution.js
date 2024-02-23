import React from "react";
import Desktop from "@/components/Navbar/Desktop";
import Footer from "../components/Footer";
import ProductListCard from "../components/ProductListCard";


const industrySolution = () => {
    return (
        <div className='overflow-y-auto w-screen h-screen'>
            <Desktop />
            <ProductListCard/>
            <Footer />
        </div>
    )
}

export default industrySolution;