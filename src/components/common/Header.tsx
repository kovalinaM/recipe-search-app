import {Link} from "react-router-dom";
import {logo} from '../../utils/images';
import {Navbar, Searchbar} from "../common/index.ts";
import {FC} from "react";

const Header:FC = () => {
    return (
        <header>
            <div className='navbar-brand-wrapper'>
                <div className='container'>
                    <Link to="/" className='navbar-brand flex items-center'>
                        <img src={logo} alt="site logo" width={60}/>
                        <p className='navbar-brand-text'>
                            find <span className='text-orange'>Recipe.</span>
                        </p>
                    </Link>
                </div>
            </div>
            <div className='header-bottom'>
                <div className='container'>
                    <Navbar/>
                    <Searchbar/>
                </div>
            </div>
        </header>
    );
}

export default Header;