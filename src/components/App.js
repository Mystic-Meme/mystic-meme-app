import React, { Component } from "react";
import Title from "./Title";
import BackgroundImage from "./BackgroundImage";
import CrystalBallView from "./CrystalBallView";
import "../styles/App.css";

export default class App extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="App">
				<BackgroundImage />
				<Title />
				<CrystalBallView />
			</div>
		);
	}
}
