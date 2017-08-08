import React, {Component} from 'react';
import CategoryList from './CategoryList';
import { Link } from 'react-router-dom';

class MainContent extends Component {
  render() {
    return (
      <section className="content fl">
        <header className="content-header">
          <h2 className="fl">Service Directory</h2>
          <Link className="btn fr" to="/support">Add New Service</Link>
        </header>
        <CategoryList />
      </section>
    )
  }
}
export default MainContent;