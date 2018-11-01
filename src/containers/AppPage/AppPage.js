import React, { Component } from 'react';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

console.log({GITHUB_TOKEN});

class AppPage extends Component {
  render() {
    return (
      <div className="AppPage">
          <p>
            Hello World.
          </p>
      </div>
    );
  }
}

export default AppPage;
