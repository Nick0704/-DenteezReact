import React, {Component} from 'react';

class UserNameInput extends Component {
  constructor(props) {
    super(props);
    this._validate = this._validate.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.state = {
      error: false,
      userName: ''
    }
  }
  handleUserNameChange(event) {
    this.setState({userName: event.target.value})
  }
  _validate(event) {
    if (event.target.value.length < 6) {
      this.setState({error: true, userName: ''});
      event.target.classList.add('incorrect');
    } else {
      this.setState({error: false, userName: event.target.value});
      event.target.classList.remove('incorrect');
      event.target.classList.add('correct');
    }
  }
  render() {
    let errMessage;
    if (this.state.error) {
      errMessage = <span className="wrong-data">Please enter a valid name!</span>;
    }
    return (
      <label htmlFor="form-username" className="fl" id="username">
        Name *
        <input
          type="text"
          id="form-username"
          name="user_name"
          value={this.state.userName}
          onChange={this.handleUserNameChange}
          onBlur={this._validate}
        />
        {errMessage}
      </label>
    )
  }
}
export default UserNameInput;