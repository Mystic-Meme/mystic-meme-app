<<<<<<< HEAD
import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
=======
import React, { Component } from "react";
import Title from "./Title";
import CrystalBallView from "./CrystalBallView";
import "../style/App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Title />
				<CrystalBallView />
			</div>
		);
	}
>>>>>>> 88a81da9bf712808bb62a811d13eb80660e26222
}
