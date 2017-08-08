import React, {Component} from 'react';

class EnqueryTypeInput extends Component {
  constructor(props){
    super(props);
    this. handleEnqueryTypeChange = this.handleEnqueryTypeChange.bind(this);
    this.state = {
      enqueryTypes: [],
      otherType: false
    }
  }
  handleEnqueryTypeChange(event){
    if(event.target.value === 'Other') {
      this.setState({otherType: true})
    } else {
      this.setState({otherType: false})
    }
  }
  componentDidMount() {
    fetch('http://504080.com/api/v1/directories/enquiry-types',{
      method: "GET",
    })
    .then(response => response.json())
      .then(response => {
       this.setState({
         enqueryTypes: response.data
       })
      })
  }
  render() {
    let otherType;
    if (this.state.otherType) {
      otherType = <input type="text" id="other-type" placeholder="Other" />;
    }
    return (
      <label htmlFor="form-enquery-type" id="enquery-type">
        Enquiry Type *
        <select
          className="select-type"
          id="form-enquery-type"
          name="enquiry_type"
          onChange={this.handleEnqueryTypeChange}
        >
          {this.state.enqueryTypes.map((item, index) => <option key={index}>{item.name}</option> )}
        </select>
        {otherType}
      </label>
    )
  }
}
export default EnqueryTypeInput;