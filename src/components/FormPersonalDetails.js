import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {

  // Button Events
  continuePressed = event => {
    // stop page from refreshing on submit
    event.preventDefault();
    this.props.nextStep();
  }
  backPressed = event => {
    // stop page from refreshing on submit
    event.preventDefault();
    this.props.previousStep();
  }

  render() {

    const { values, handleFieldChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />

          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleFieldChange('occupation')}
            defaultValue={values.occupation} />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleFieldChange('city')}
            defaultValue={values.city} />
          <br />
          <TextField
            hintText="A little about yourself"
            floatingLabelText="Bio"
            onChange={handleFieldChange('bio')}
            defaultValue={values.bio} />
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            secondary={true}
            style={styles.button}
            onClick={this.backPressed} />
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

export default FormPersonalDetails
