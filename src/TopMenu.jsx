import { useState } from 'react'

export default function TopMenu (){
    const [open,setOpen]= useState(false);
   
    const  toggleMenu =() => {
        setOpen(!open)
        
    }
    return(
        <div className="top-menu">
        {open ? (
            <nav>
            <a>link 1</a> 
            <a>link 2</a>
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

