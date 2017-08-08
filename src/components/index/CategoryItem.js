import React, {Component} from 'react';

class CategoryItem extends Component {
  render() {
    return (
      <a href="#" className="category-item fl">
        <div className="icon-wrap">
          <img src={this.props.icon} className="category" />
        </div>
        <span className="category-title">{this.props.title}</span>
      </a>
    )
  }
}
export default CategoryItem;