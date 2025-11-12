import React from 'react'
import Nav from '../components/nav/Nav'
import Hero from '../components/products/Hero'
import LeftSection from '../components/products/LeftSection'
import RightSection from '../components/products/RightSection'
import Universe from '../components/products/Universe'
import Footer from '../components/footer/footer'

const ProductPage = () => {
    return (
        <>
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
        </>
    )
}

export default ProductPage
