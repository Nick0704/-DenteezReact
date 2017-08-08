import React, {Component} from 'react';

class EmailInput extends Component {
  constructor(props) {
    super(props);
    this._validate = this._validate.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.state = {
      error: false,
      email: ''
    }
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }
  _validate(event) {
    let patt = /^.+@.+[.].{2,}$/i;
    if (!patt.test(event.target.value)) {
      this.setState({error: true, email: ''});
      event.target.classList.add('incorrect')
    } else {
      this.setState({error: false, email: event.target.value});
      event.target.classList.remove('incorrect');
      event.target.classList.add('correct');
    }
  }
  render() {
    let errMessage;
    if (this.state.error) {
      errMessage = <span className="wrong-data">Please enter a valid email!</span>;
    }
    return (
      <label htmlFor="form-email" className="fr" id="user-email">
        Email *
        <input
          type="text"
          id="form-email"
          name="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          onBlur={this._validate}
        />
        {errMessage}
      </label>
    )
  }
}
export default EmailInput;