import { useState } from 'react'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import CurrencyContext from './CurrencyContext'

function App() {
  
  const [currentPage, setCurrentPage] = useState('');



  return (
    <>
    <CurrencyContext.Provider value ="CZK">
    <Header 
    currentPage ={ currentPage }
    setCurrentPage = {setCurrentPage}
    />
   <MainContent 
   currentPage = {currentPage}/>

    <Footer/>
    </CurrencyContext.Provider>
</>
  )
}

export default App
