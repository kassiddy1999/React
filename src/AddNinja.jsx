import React, { Component } from 'react';

class AddNinja extends Component {
state = {
  name:null,
  age:null,
  belt:null,


}
handleChange=(e)=>{
  this.setState({
    [e.target.id]:e.target.value
  })
}
handleSubmit = (e) =>{
  e.preventDefault();
  this.props.addNinja(this.state);

}
  render() {
    return (
      <div>
<form className="container" onSubmit={this.handleSubmit}>
  <div className = "form-group">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" className="form-control" onChange={this.handleChange}></input>
  </div>

  <div className = "form-group">
    <label htmlFor="name">Age:</label>
    <input type="text" className="form-control" id ="age" onChange={this.handleChange}></input>
  </div>
  <div className = "form-group">
    <label htmlFor="name">Belt:</label>
    <input type="text" id="belt" className="form-control" onChange={this.handleChange}></input>
  </div>
<button type = "submit" className="btn btn-primary buttons">submit</button>
</form>
      </div>
    );
  }

}

export default AddNinja;
