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
}
