import React from 'react'
import Team from '@/components/Team'
import Desktop from '@/components/Navbar/Desktop'
import Footer from '@/components/Footer'
const team = () => {
  return (
    <div className='overflow-y-auto h-screen w-screen'>
      <Desktop />
      <Team />
      <Footer />

    </div>
  )
}

export default team