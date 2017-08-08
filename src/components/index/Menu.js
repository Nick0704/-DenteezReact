import React, {Component} from 'react';

class Menu extends Component {
  render() {
    return (
      <nav className="sidebar-menu">
        <ul className="menu">
          <li><a href="#"><i className="icon icon-feed"/>Feed</a></li>
          <li><a href="#"><i className="icon icon-ask"/>Ask a Colleague</a></li>
          <li><a href="#"><i className="icon icon-companies"/>Companies</a></li>
          <li><a href="#"><i className="icon icon-service"/>Service Directory</a></li>
        </ul>
      </nav>
    )
  }
}
export default Menu;