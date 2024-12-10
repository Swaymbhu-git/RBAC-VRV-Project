import React from 'react'
import Header from '../components/Header'
import Cover from '../components/Cover'
import Intro from '../components/Intro'
import Work from '../components/Work'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <Cover/>
        <Intro/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home