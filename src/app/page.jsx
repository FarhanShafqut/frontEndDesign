
import Image from 'next/image'
import HomeSlider from './(components)/homeSlider/page'
import Fade from './(components)/homeSlider/page'
import Navbar from './(components)/Navbar/page'
import SliderCard11 from './(components)/homeCard/page'
import HomeCard from './(components)/homeCard/page'

export default function Home() {
  return (
    <div className='bg-slate-300 dark:bg-slate-700'>
          <Navbar/>
      <div className='max-w-full py-2 bg-grad  px-4 sm:py-0 ' >
        <div className='max-w-[1440px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto ' >
          {/* <HomeSlider /> */}
        <HomeSlider/>
          <div>
            <HomeCard/>
            <h1>assa</h1>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
