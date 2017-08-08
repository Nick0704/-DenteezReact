import React, {Component} from 'react';

class RightSidebar extends Component {
  render() {
    return (
      <section className="sidebar fl">
        <section className="potential-friends">
          <header>
            <h4 className="fl">People you may know</h4>
            <a href="#" className="see-all fr">See All</a>
          </header>
          <article>
            <a href="#" className="fl">Dennis Adams</a>
            <img src="photo/person1.jpg" className="fl" alt="" />
            <p>
              <span>Dentist (Practice Owner)</span>
              <span>London, England</span>
              <a href="#" className="follow">Add Friend</a>
            </p>

          </article>
          <article>
            <a href="#" className="fl">Mary Carpenter</a>
            <img src="photo/person2.jpg" className="fl" alt="" />
            <p>
              <span>Dentist (Practice Owner)</span>
              <span>Belgrade, Serbia</span>
              <a href="#" className="follow">Add Friend</a>
            </p>
          </article>
          <article>
            <a href="#" className="fl">Danielle Salazar</a>
            <img src={"photo/person3.jpg"} className="fl" alt={""} />
            <p className="fr">
              <span>Dentist (Practice Owner)</span>
              <span>Paris, France</span>
              <a href="#" className="follow">Add Friend</a>
            </p>
          </article>
        </section>
        <section className="featured-products">
          <header>
            <h4 className="fl">Featured Products</h4>
            <a href="#" className="see-all fr">See All</a>
          </header>
          <article>
            <a href="#" className="fl">Product Name</a>
            <img src={"photo/product1.jpg"} className="fl" alt="" />
            <p>Product Short
              Description. The quick brown
              fox jumps over the
              lazy dog.</p>
          </article>
          <article>
            <a href="#" className="fl">Product Name</a>
            <img src="photo/product2.jpg" className="fl" alt="" />
            <p className="fr">Product Short
              Description. The quick brown
              fox jumps over the
              lazy dog.</p>
          </article>
        </section>
        <section className="banner">
          <header>
            <h4>Advertisement</h4>
          </header>
          <img src="img/new-trends.jpg" alt="banner" />
        </section>
      </section>
    )
  }
}
export default RightSidebar;