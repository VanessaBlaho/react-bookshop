import { useState } from 'react'

export default function TopMenu (props){
    const [open,setOpen]= useState(false);
   
    const  toggleMenu =() => {
        setOpen(!open)
        
    }
    return(
        <div className="top-menu">
        {open ? (
            <nav>
            <a className={`link ${props.currentItem === '' ? 'link--highlighted' : ''}`} href="#">Home</a>
            <a className= {`link ${props.currentItem === 'about' ? 'link--highlighted' : ''}`} href="#about">About us</a>
            <a className={`link ${props.currentItem === 'contact' ? 'link--highlighted' : ''}`} href="#contact">Contact</a>

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

