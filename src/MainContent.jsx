
import LoginForm from "./LoginForm";

export default function MainContent(currentPage){
    return(
        <main className="app-box">
    <h1 className="app__headline">Welcome</h1>
    {
                currentPage === ''
                    ? <h2>Welcome!!</h2>
                    : ''
            }

            {
                currentPage === 'about'
                    ? <h2>About us</h2>
                    : ''
            }

            {
                currentPage === 'contact'
                    ? <h2>Contact form</h2>
                    : ''
            }
    <LoginForm/>
    
   
</main>
    )
}

