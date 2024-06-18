
import Search from '../search/search';
import Selectfilter from '../selectFilter/selecteFilter';
import Updatefilds from '../updateFields/updateFields';

const NavBar = () => {

    return (
        <div className="navbar">
           <div className="navbar-inner full-width">
                <Search />
                <Selectfilter />
                <Updatefilds />
            </div> 
        </div>
    );
}

export default NavBar;
