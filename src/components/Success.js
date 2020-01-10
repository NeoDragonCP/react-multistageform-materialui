import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {


  // Button Events
  restartForm = event => {
    this.props.restartForm();
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for your submission</h1>
          <h4>You will get an email with further instructions.</h4>

          <RaisedButton
            label="Restart Form"
            primary={true}
            style={styles.button}
            onClick={this.restartForm} />

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

export default Success
