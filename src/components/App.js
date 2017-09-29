import React, { Component } from "react";
import Title from "./Title";
import { Switch, Route } from "react-router-dom";
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
				<Switch>
					<Route exact path="/crystal" component={CrystalBallView} />
					<Route exact path="/" component={Title} />
				</Switch>
			</div>
		);
	}
}
