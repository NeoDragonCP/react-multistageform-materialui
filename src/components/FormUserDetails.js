import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

  // Button Event
  continuePressed = event => {
    // stop page from refreshing on submit
    event.preventDefault();
    this.props.nextStep();
  }

  render() {

    const { values, handleFieldChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />

          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleFieldChange('firstName')}
            defaultValue={values.firstName} />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleFieldChange('lastName')}
            defaultValue={values.lastName} />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleFieldChange('email')}
            defaultValue={values.email} />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continuePressed} />
        </React.Fragment>
      </MuiThemeProvider>

    )
  }
}


// Style for the confirm button
const styles = {
  button: {
    margin: 15,
  }
}

export default FormUserDetails
