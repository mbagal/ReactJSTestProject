import React, { Component } from "react";
import Input from "./Input";
import { MyTable } from "./MyTable";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      firstName: "",
      lastName: "",
      age: 0,
    };
    this.rows = [];
  }

  clickInput = (e) => {
    this.setState({ lastName: e.target.value });
  };

  submitDataToTable = (e) => {
    e.preventDefault();
    //console.log(`FirstName $this.state.firstName`);
    this.setState(() => ({
      id: this.state.id + 1,
    }));
    this.rows = [...this.rows, this.state];
  };

  render() {
    return (
      <div>
        <form>
          <h1>Fill your details below</h1>
          First Name : <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <br />
          Last Name :
          <Input
            type="text"
            value={this.state.lastName}
            onChange={this.clickInput}
          />
          Age :<br />
          <input
            type="text"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <br />
          <button onClick={this.submitDataToTable}>Submit</button>
          {/*  {JSON.stringify(this.state)} */}
        </form>

        <MyTable rows={this.rows} />
      </div>
    );
  }
}

export default FormContainer;
