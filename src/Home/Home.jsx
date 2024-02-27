import React from 'react'
import Intro from '../Intro/Intro'
import Cards from '../Home/Cards/Cards'
import AboutCompany from '../Home/About__Company/AboutCompany'
import Portfolio from '../Home/Portfolio/Portfolio'
import Contacts from './Contact/Contact'


function Home() {
  return (
    <section className='home'>
       <Intro/>
       <Cards/>
       <AboutCompany/>
       <Portfolio/>
       <Contacts/>
    </section>
  )
}

export default Home