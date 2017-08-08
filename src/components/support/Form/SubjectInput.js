import React, {Component} from 'react';

class SubjectInput extends Component {
  constructor(props) {
    super(props);
    this._validate = this._validate.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.state = {
      error: false,
      subject: ''
    }
  }
  handleSubjectChange(event) {
    this.setState({subject: event.target.value})
  }
  _validate(event) {
    if (event.target.value.length < 6) {
      this.setState({error: true, subject: ''});
      event.target.classList.add('incorrect');
    } else {
      this.setState({error: false, subject: event.target.value});
      event.target.classList.remove('incorrect');
      event.target.classList.add('correct');
    }
  }
  render() {
    let errMessage;
    if (this.state.error) {
      errMessage = <span className="wrong-data">Please enter a valid subject!</span>;
    }
    return (
      <label htmlFor="form-subject" id="subject">
        Subject *
        <input
          type="text"
          id="form-subject"
          name="subject"
          value={this.state.subject}
          onChange={this.handleSubjectChange}
          onBlur={this._validate}
        />
        {errMessage}
      </label>
    )
  }
}
export default SubjectInput;