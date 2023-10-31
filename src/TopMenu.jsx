import { useState } from 'react'

export default function TopMenu ({
    currentPage,
    setCurrentPage,
    currentItem
}){
    const [open,setOpen]= useState(false);
   
    const  toggleMenu =() => {
        setOpen(!open)
        
    }

    const handleItemClick = (page) => {
        setCurrentPage(page);
    }

    return(
        <div className="top-menu">
        {open ? (
            <nav>
              <a 
                className={ `link` + (currentPage === '' ? ' link--highlighted' : '') }
                href="#"
                onClick={ () => handleItemClick('') }
              >
                Home
                </a>
                <a 
                  className={ `link` + (currentPage === 'about' ? ' link--highlighted' : '') }
                  href="#about"
                  onClick={ () => handleItemClick('about') }
                            >
                                About us
                            </a>
                            <a
                               className={ `link` + (currentPage === 'contact' ? ' link--highlighted' : '') }
                                href="#contact"
                                onClick={ () => handleItemClick('contact') }
                            >
                                Contact
                            </a>
                            <a
                               className={ `link` + (currentPage === 'login' ? ' link--highlighted' : '') }
                                href="#login"
                                onClick={ () => setCurrentPage('login') }
                            >
                                Login
                            </a>

            <div className="burger-icon" onClick={(toggleMenu)}>
             ☰</div>
             </nav>
                )
        : (<div className="burger-icon" onClick={(toggleMenu)}>
            ☰
        </div>
         )}
    </div>
    );
}

