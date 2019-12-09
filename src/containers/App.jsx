import React from 'react'
import '../assets/css/styles.css'

/* Componentes */
// eslint-disable-next-line
import Header from '../components/Header'
import Slider from '../components/Slider'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Peliculas from '../components/Peliculas'

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <div className='center'>
        <Peliculas />
      </div>
      <Sidebar />
      <div className='clearfix' />
      <Footer />
    </div>
  )
}

export default App
