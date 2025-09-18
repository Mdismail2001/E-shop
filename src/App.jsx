import { useState } from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    </>
  )
}

export default App
