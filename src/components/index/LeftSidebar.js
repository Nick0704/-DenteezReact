import React, {Component} from 'react';
import Menu from './Menu';

class LeftSidebar extends Component {
  render() {
    return (
      <section className="sidebar fl">
        <Menu />
        <section className="banner">
          <header>
            <h4>Advertisement</h4>
          </header>
          <img src={"img/three-stars.jpg"} alt={"banner"} />
        </section>
        <section className="featured-companies">
          <header>
            <h4 className="fl">Featured Companies</h4>
            <a href="#" className="see-all fr">See All</a>
          </header>
          <article>
            <img src={"photo/company1.jpg"} className="fl" alt={""} />
            <a href="#">Company Name</a>
            <p>
              <span>Manufacturer</span>
              <span>Belgrade, Serbia</span>
            </p>
            <a href="#" className="follow">Follow Now</a>
          </article>
          <article>
            <img src={"photo/company2.jpg"} className="fl" alt={""} />
            <a href="#">Company Name</a>
            <p>
              <span>Service Provider</span>
              <span>New York, USA</span>
            </p>
            <a href="#" className="follow">Follow Now</a>
          </article>
          <article>
            <img src={"photo/company3.jpg"} className="fl" alt={""} />
            <a href="#">Company Name</a>
            <p>
              <span>Supplier</span>
              <span>London, England</span>
            </p>
            <a href="#" className="follow">Follow Now</a>
          </article>
        </section>
      </section>
    )
  }
}
export default LeftSidebar;