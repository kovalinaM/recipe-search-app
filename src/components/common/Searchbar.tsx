import {FC} from "react";
import {BsSearch} from "react-icons/bs";

const Searchbar:FC = () => {
    return (
        <form className='search-bar'>
            <input type="text" id='queery' name='query' placeholder='Search recipe here ...'/>
            <button type='submit' className='search-btn'>
                <BsSearch className='text-white' size={16}/>
            </button>
        </form>
    );
}

export default Searchbar;