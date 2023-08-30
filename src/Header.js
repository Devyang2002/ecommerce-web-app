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
      <h2  id='header1'className='headerlogo'>OneStopShop</h2>
      </Link>

      <div className="header_search">
        <input className='header__searchInput' placeholder='Search for an item...' type="text" />
        <SearchIcon id='searchlogo' className='header__searchIcon' />
      </div>

      <div className="header_nav">
        <Link to='/login'>
        <div id='headeroption1' className="header__option">
                <span id='header_guest' className="header__optionone">
                    Hello Guest
                </span>
                <span id='header_signin'className="header__optiontwo">
                    Sign in
                </span>
        </div>
        </Link>
        <div id='headeroption2' className="header__option">
        <span id='header_r'className="header__optionone">
                    Returns
                </span>
                <span id='header_q'className="header__optiontwo">
                    &Orders
                </span>
        </div>
      </div>
      <Link to='/checkout' >
        <div id='headercart' className="header__basket">
        <span className="header__basketcount">{basket?.length}</span>
          <ShoppingCartOutlinedIcon/>
      </div>
      </Link>
    </div>
  )
  }
