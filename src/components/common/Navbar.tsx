import {FC} from "react";
import {Link, useLocation} from "react-router-dom";

const Navbar:FC = () => {
    const location = useLocation();

    const navItems = [
        {
            path: '/', label: 'Home'
        },
        {
            path: '/types/meal', label: 'Meals'
        },
        {
            path: '/types/dish', label: 'Dishes'
        },
        {
            path: '/types/cuisine', label: 'Cuisines'
        },
        {
            path: '/contact', label: 'Contact'
        }
    ];

    return (
        <nav>
            <ul className='nav-list'>
                {navItems?.map((item) => (
                    <li key={item.path}>
                        <CustomNavLink to={item.path} label={item.label} isActive={location.pathname === item.path}/>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;

interface ICustomNavbarProps {
    to: string;
    label: string;
    isActive: boolean;
}
const CustomNavLink:FC<ICustomNavbarProps> = ({to, label, isActive}) => (
    <Link to={to} className={`nav-link ${isActive ? 'nav-link-active' : ''}`}>
        {label}
    </Link>
)