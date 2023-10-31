
import CurrencySelection from './CurrencySelection';
import './Header.scss'
import TopMenu from './TopMenu';

export default function Header({currentPage, setCurrentPage}){

    const currentMenuItem = 'contact';

    return(
    <header className="header">
    <div className="header__sitename">
       <h1>The Strand</h1>
    </div>
    
    <CurrencySelection/>
    <TopMenu 
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        currentItem = {currentMenuItem}
    />
   
</header>
    );
}