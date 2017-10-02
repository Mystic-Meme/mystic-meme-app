import React, { Component } from "react";

import Head from "./Head";
import CrystalBallImage from "./CrystalBallImage";
import ChatBubble from "./ChatBubble";
import BackgroundImage from "./BackgroundImage";
import "../styles/App.css";

export default class FortuneTeller extends Component {
	constructor() {
		super();
		this.state = {
			questions: [
				"How do you plead?",
				"Can I get you anything?",
				"Does this turban make me look bald?"
			],
			responses: [
				"How quaint.",
				"That is frankly implausible.",
				"None of this is real."
			],
			userInput: []
		};
	}

	render() {
		return (
			<div className="fortune-teller-view zoomed-in">
				<CrystalBallImage />
				<ChatBubble
					questions={this.state.questions}
					responses={this.state.responses}
				/>
				<Head />
				<BackgroundImage />
			</div>
		);
	}
}
