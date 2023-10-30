import './Header.scss'
import TopMenu from './TopMenu';

export default function Header(){
    return(
    <header className="header">
    <div className="header__sitename">
       <h1>The Strand</h1>
    </div>
    <TopMenu/>
</header>
    );
}