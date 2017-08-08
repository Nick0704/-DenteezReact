import React, {Component} from 'react';

class DescriptionInput extends Component {
  constructor(props) {
    super(props);
    this._validate = this._validate.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.countChar = this.countChar.bind(this);
    this.state = {
      error: false,
      description: ''
    }
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }
  countChar(event) {
    document.getElementById('textarea-length').innerText = "(" + event.target.value.length + "/1000)";
    if (event.target.value.length > 1000) event.target.value = event.target.value.substr(0, 999);
  }
  _validate(event) {
    if (event.target.value.length < 15) {
      this.setState({error: true,});
      event.target.classList.add('incorrect')
    } else {
      this.setState({error: false, description: event.target.value});
      event.target.classList.remove('incorrect');
      event.target.classList.add('correct');
    }
  }
  render() {
    let errMessage;
    if (this.state.error) {
      errMessage = <span className="wrong-data">Please enter at least 15 characters!</span>;
    }
    return (
      <label htmlFor="form-description" id="description">
        Description *
        <span id="textarea-length" className="fr">(0/1000)</span>
        <textarea
          name="description"
          id="form-description"
          maxLength="1000"
          value={this.state.description}
          onKeyUp={this.countChar}
          onChange={this.handleDescriptionChange}
          onBlur={this._validate}
        />
        {errMessage}
      </label>
    )
  }
}
export default DescriptionInput;