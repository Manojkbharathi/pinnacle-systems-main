import Navbar from '../components/Navbar/Desktop'
import Landing from '../components/Landing'
import Card from '../components/Cards'
import Stepper from '../components/Stepper'
import Slider from '../components/Carousel'
import Footer from '../components/Footer'
// import { Features } from '@headlessui/react/dist/utils/render'


export default function Home() {
  return (
    <div className='overflow-y-auto h-screen'>
      <Navbar />
      <Landing />
      <Card />
      <Slider />
      {/* <Stepper /> */}
      <Footer/>
    </div>  
  )
}
