import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';


export default function Header() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='Header'>
      <Link to="/">
      <h2 className='headerlogo'>OneStopShop</h2>
      </Link>

      <div className="header_search">
        <input className='header__searchInput' type="text" />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className="header_nav">
        <div className="header__option">
                <span className="header__optionone">
                    Hello Guest
                </span>
                <span className="header__optiontwo">
                    Sign in
                </span>
        </div>
        <div className="header__option">
        <span className="header__optionone">
                    Returns
                </span>
                <span className="header__optiontwo">
                    &Orders
                </span>
        </div>
      </div>
      <Link to='/checkout'>
        <div className="header__basket">
        <span className="header__basketcount">{basket?.length}</span>
          <ShoppingCartOutlinedIcon/>
      </div>
      </Link>
    </div>
  )
}
