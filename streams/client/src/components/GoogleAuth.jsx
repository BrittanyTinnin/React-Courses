import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "773340402995-qrh98dd09r5gt1encm2ovb1hij9l9au5.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
