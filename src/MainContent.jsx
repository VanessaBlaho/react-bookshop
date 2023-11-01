
import AboutUs from "./AboutUs";
import BookDetail from "./BookDetail";
import Contact from "./Contact";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import { Routes, Route } from 'react-router-dom';
import SubpageLayout from "./SubPageLayout";


export default function MainContent(currentPage){
    return(
        <main className="app-box">
    <h1 className="app__headline">Welcome</h1>
    <Routes>
        < Route path="/" element={<Homepage/>} />

        <Route path="/" element={ <SubpageLayout /> }>
            < Route path="/about-us" element={<AboutUs/>}/>
            < Route path="/contact-us" element={<Contact/>}/>
            < Route path="/book/:id" element={<BookDetail/>}/>
            <Route path="*" element="404: page not found" />
        </Route>
    </Routes>

    <LoginForm/>
   
   
</main>
    )
}

