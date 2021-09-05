import React, { Component } from 'react';

function CurrentPatient() {
  React.useEffect(() => {
    window.location.replace("https://login.patientfusion.com/?defaultTab=login&redirect=https%3A%2F%2Fmy.patientfusion.com");
  });

  return <div />
  
}

export default CurrentPatient;