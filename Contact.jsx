import React, { Component } from 'react'

class Contact extends Component {
  constructor() {
    super()
  }
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    phoneNumberErr: "",
  };
  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.firstName.length < 3) {
        this.setState({firstNameErr:"firstname err"})

    }
    else{
      this.setState({firstNameErr:""})
    }
    if (this.state.lastName.length < 1) {
      this.setState({lastNameErr: "LastName should contains min 1Char"})
    }
    else{
      this.setState({lastNameErr:""})
    }
    if (!this.state.email.includes("@")) {
     this.setState ({emailErr: "Email should include @"})
    }
    else{
      this.setState({emailErr:""})
    }
    if (this.state.phoneNumber.length !== 10) {
      this.setState({phoneNumberErr: "PhoneNumber should be extactly 10"})
    }
    else{
      this.setState({phoneNumberErr:""})
    }
    
    console.log(this.state);


  };
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })

  }



  render() {
    console.log(this.state);

    return (

      <div>
        <h2>contact</h2>


        <div>
          <form action="#" onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text"
              name='firstName'
              placeholder='Enter your Firstname'
              value={this.state.firstName}
              onChange={(e) => this.handleChange(e)} /><br /><br />
            {
              this.state.firstNameErr && <p className="text-danger">{this.state.firstNameErr}</p>
            }

            <input type="text"
              name='lastName'
              placeholder='Enter your Lastname'
              value={this.state.lastName}
              onChange={(e) => this.handleChange(e)} /><br /><br />
            {
              this.state.lastNameErr && <p className="text-danger">{this.state.lastNameErr}</p>
            }

            <input type="text"
              name='email'
              placeholder='Enter your Mail id'
              value={this.state.email}
              onChange={(e) => this.handleChange(e)} /><br /><br />
            {
              this.state.emailErr && <p className="text-danger">{this.state.emailErr}</p>
            }

            <input type="number"
              name='phoneNumber'
              placeholder='Enter your Phonenumber'
              value={this.state.phoneNumber}
              onChange={(e) => this.handleChange(e)} /><br /><br />
            {
              this.state.phoneNumberErr && <p className="text-danger">{this.state.phoneNumberErr}</p>
            }

            <input type="submit" name='submit' />
          </form>
        </div>
      </div>
    )
  }
}

export default Contact