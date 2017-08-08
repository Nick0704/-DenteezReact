import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="page-footer-content">
          <h3>About Denteez</h3>
          <p className="fl">Why is it always so difficult to find what you are looking for in dentistry? Whether it is the latest advancement
            in technology or techniques or simply a review or understanding of the vast amount of products? Perhaps finding
            someone to just fix your broken equipment or simply hiring new staff or looking for that new job?</p>
          <p className="fl">Our mission is to give every dental professional the possibility to discuss and share all aspects of their
            profession, their practice and their business. We aim to make the world of dentistry easy and accessible, so every
            dental professional can find what they are looking for quickly and easily all in one place.</p>
        </div>
        <div className="bottom-line">
          <div className="bottom-line-content">
            <span className="fl">Denteez Copyright 2015</span>
            <ul className="fr">
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Polycy</a></li>
              <li><a href="#">Terms of use</a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer;