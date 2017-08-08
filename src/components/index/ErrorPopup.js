import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ErrorPopup extends Component {

  constructor(props) {
    super(props);
    this._destroy = this._destroy.bind(this);
  }

  componentDidMount() {
    this.renderPopup();
  }

  componentDidUpdate() {
    this.renderPopup();
  }

  render() {
    return (<noscript/>);
  }

  _destroy() {
    ReactDOM.unmountComponentAtNode(document.getElementById('boxes'));
  }

  renderPopup() {
    let popup = document.createElement("div");
    popup.setAttribute('id', 'boxes');
    document.body.appendChild(popup);
    ReactDOM.render(
      <div>
        <div className="popUp">
          <p className="message">{this.props.description}</p>
          <button className="btn close" onClick={this._destroy}>Close</button>
        </div>
        <div id="mask" style={{
  height: Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  ) + 'px'
}}  onClick={this._destroy}/>
      </div>,
      document.getElementById('boxes'));
  }
}
export default ErrorPopup;
