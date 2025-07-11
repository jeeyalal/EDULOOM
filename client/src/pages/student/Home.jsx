import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourcesSection from '../../components/student/CourcesSection'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import CallToAction from '../../components/student/CallToAction'
import Fotter from '../../components/student/Fotter'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
        <Hero />
        <Companies/>
        <CourcesSection />
        <TestimonialsSection />
        <CallToAction />
        <Fotter />
    </div>
  )
}

export default Home