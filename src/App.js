import React from 'react'

import { Footer, Blog, Possibility, Features, Header, WhatGpt3 } from './containers';
import { CTA, Brand, Navbar } from './components'

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt3/>
      <Features/>
      <Possibility/>

      <CTA/>
      <Blog/>
      <Footer/>
     
    </div>
  )
}

export default App