import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  }

  // Proceed to the next step
  nextStep = () => {
    // destructuring
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Go Back to the previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  restartForm = () => {

    // Clear the fields
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      city: "",
      bio: ""
    });

    // Reset the step
    this.setState({ step: 1 });
  }

  // Handle fields change
  handleFieldChange = input => event => {
    this.setState({ [input]: event.target.value });
  }

  render() {

    // Destructuring the state/fields to variables
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    // Render out based on the step
    switch (step) {
      default:
      case 1:
        return (
          < FormUserDetails
            nextStep={this.nextStep}
            handleFieldChange={this.handleFieldChange}
            values={values}
          />
        )
      case 2:
        return (
          < FormPersonalDetails
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleFieldChange={this.handleFieldChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            values={values}
          />
        )
      case 4:
        return (
          <Success
            restartForm={this.restartForm}
          />
        )
    }
  }
}

export default UserForm
