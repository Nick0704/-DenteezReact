import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="support-header">
        <div className="support-header-content">
          <div className="top-line">
            <Link className="logo-wrap fl" to="/"><div className="logo"/></Link>
            <button className="btn fr">Log in Now</button>
          </div>
          <div className="page-title">
            <h1>Home of Dentistry</h1>
            <p>Denteez was created by dentists for dentistry in order to
              make the life of everyone involved in dentistry easier.</p>
          </div>
        </div>
      </header>
    )
  }
}
export default Header;