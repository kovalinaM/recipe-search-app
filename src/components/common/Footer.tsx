import {FC, ReactNode} from "react";
import {Link} from "react-router-dom";
import {logo} from '../../utils/images';
import {footerLinksData} from "../../data.ts";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";

const Footer:FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <Link to='/' className='navbar-brand'>
                        <img src={logo} alt="site logo" width={60}/>
                        <p className='navbar-brand-text'>
                            find <span className='text-orange'>Recipe.</span>
                        </p>
                    </Link>
                </div>
                <div className="footer-links">
                    {
                        footerLinksData?. map((link, index) => (
                            <Link key={index}>{link.linkName}</Link>
                        ))
                    }
                </div>
                <div className="footer-bottom">
                    <SocialLink to="/" icon={<AiFillInstagram/>} />
                    <SocialLink to="/" icon={<AiFillYoutube/>} />
                    <SocialLink to="/" icon={<BsPinterest/>} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;


interface ISocialLinkProps {
    to: string;
    icon: ReactNode;
}

const SocialLink:FC<ISocialLinkProps> = ({to, icon}) => (
    <Link to={to} className='social-link'>
        {icon}
    </Link>
)
