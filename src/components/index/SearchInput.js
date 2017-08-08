import React, {Component} from 'react';

class SearchInput extends Component {
  componentDidMount() {
    const accountPanelWidth = document.querySelector('.account-panel').offsetWidth;
    this.searchInput.style.width = "calc(100% - " + accountPanelWidth + "px)";
  }
  render() {
    return (
      <div className="search-wrap" ref={(input) => { this.searchInput = input; }}>
        <i className="icon icon-search"/><input type="text" className="search" placeholder="Search" />
      </div>
    )
  }
}
export default SearchInput;