import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'


function App() {
  const [currentPage, setCurrentPage] = useState('');



  return (
    <>
    <Header 
    currentPage ={ currentPage }
    setCurrentPage = {setCurrentPage}
    />
   <MainContent 
   currentPage = {currentPage}/>

    <Footer/>

</>
  )
}

export default App
