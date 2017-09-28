import React, { Component } from "react";
import Title from "./Title";
import CrystalBallView from "./CrystalBallView";
import "../styles/App.css";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Title />
				<CrystalBallView />
			</div>
		);
	}
}
