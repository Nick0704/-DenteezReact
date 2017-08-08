import React, {Component} from 'react';
import EnqueryTypeInput from './EnqueryTypeInput';
import UserNameInput from './UserNameInput';
import EmailInput from './EmailInput';
import SubjectInput from './SubjectInput';
import DescriptionInput from './DescriptionInput';

class Form extends Component {
  render() {
    return (
      <form method="post" className="form" id="support-form" name="support-form" encType="multipart/form-data">
        <div className="form-body">
          <span>Fields marked <sup>"+"</sup> are required</span>
          <EnqueryTypeInput />
          <div className="user-data">
            <UserNameInput />
            <EmailInput />
          </div>
          <SubjectInput />
          <DescriptionInput />
          <div className="photo-item">
            <span>Add photo</span>
            <p>Minimum size of
              300x300 jpeg ipg
              png 5 MB</p>
          </div>
        </div>
        <input type="submit" id="send" className="btn" value="Submit" />
      </form>
    )
  }
}
export default Form;