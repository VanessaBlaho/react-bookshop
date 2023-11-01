import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

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
    const location = useLocation();
       console.log(location);


    return(
        <div className="top-menu">
            
        {open ? (
            <nav>
              <Link 
                className={ `link` + (location.pathname === '/' ? ' link--highlighted' : '') }
                to="/"
              >
                Home
                </Link>
                <Link
                  className={ `link` + (location === '/about-us' ? ' link--highlighted' : '') }
                  to="/about-us"
    
                            >
                                About us
                            </Link>
                            <Link
                               className={ `link` + (location === 'contact-us' ? ' link--highlighted' : '') }
                                to="/contact-us"
            
                            >
                                Contact
                            </Link>
                            <Link
                               className={ `link` + (location === 'login' ? ' link--highlighted' : '') }
                                to="/login"
                                
                            >
                                Login
                            </Link>

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

