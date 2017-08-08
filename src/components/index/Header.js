import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <div className="top-line">
          <Link className="logo fl" to="/"><img src={"img/logo.png"} alt="Logo" /></Link>
          <div className="top-panel fl">
           <SearchInput />
            <div className="account-panel fl">
              <a href="#" className="into-chat"><i className="icon icon-chat"/></a>
              <a href="#" className="into-notification"><i className="icon icon-notification"/></a>
              <a href="#" className="profile">
                <img src="img/avatar.jpg" alt="avatar" className="avatar" /> <span>Maximillian Beekeeper</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default Header;