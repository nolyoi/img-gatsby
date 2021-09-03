import React, { Component } from 'react';

class CurrentPatient extends Component {
  componentDidMount() {
    window.location.replace("https://login.patientfusion.com/?defaultTab=login&redirect=https%3A%2F%2Fmy.patientfusion.com");
  }

  render() {
    return <div />
  }
}

export default CurrentPatient;