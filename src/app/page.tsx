import React from 'react'

import Header from './components/Header'
import Feature from './components/Feature'
import Mega from './components/Mega'
import AuthorCard from './components/AuthorCard'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <Feature/>
      <Mega/>
      <AuthorCard/>
      <Footer/>
     
    </div>
  )
}

export default page
