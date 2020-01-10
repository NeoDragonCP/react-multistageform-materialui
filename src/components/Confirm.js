import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {

  // Button Events
  continuePressed = event => {
    // stop page from refreshing on submit
    event.preventDefault();
    ////////////////////////////////
    // Send data to API in realworld
    ////////////////////////////////
    this.props.nextStep();
  }
  backPressed = event => {
    // stop page from refreshing on submit
    event.preventDefault();
    this.props.previousStep();
  }

  render() {

    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Details" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={firstName} />
            <ListItem
              primaryText="Last Name"
              secondaryText={lastName} />
            <ListItem
              primaryText="Email"
              secondaryText={email} />
            <ListItem
              primaryText="Occupation"
              secondaryText={occupation} />
            <ListItem
              primaryText="City"
              secondaryText={city} />
            <ListItem
              primaryText="Bio"
              secondaryText={bio} />
          </List>
          <RaisedButton
            label="Back"
            primary={false}
            secondary={true}
            style={styles.button}
            onClick={this.backPressed} />
          <RaisedButton
            label="Confirm"
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

export default Confirm
