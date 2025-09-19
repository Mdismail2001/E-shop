import { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'
import Chart from './components/chart/Chart'

function App() {
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Products></Products>
    {/* <Chart></Chart> */}
    <Footer></Footer>
    </>
  )
}

export default App
