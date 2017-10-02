import React, { Component } from "react";

import Head from "./Head";
import CrystalBallImage from "./CrystalBallImage";
import ChatBubble from "./ChatBubble";
import BackgroundImage from "./BackgroundImage";
import ChatResponse from "./ChatResponse";
import getMemes from "./helpers/Fetch";
import "../styles/App.css";

export default class FortuneTeller extends Component {
	constructor() {
		super();
		this.state = {
			currentQuestion: 0,
			currentInput: "",
			currentResponse: 0,
			questions: [
				"What is your middle name?",
				"How do you plead?",
				"Can I get you anything?",
				"Does this turban make me look bald?",
				"Do you respect wood?"
			],
			responses: [
				"...",
				"How quaint.",
				"That is frankly implausible.",
				"None of this is real.",
				"That doesn't make any sense.",
				"*stares in your eyes, suspiciously*"
			],
			userInput: []
		};
	}
	_updateQuestion = e => {
		this._updateResponse();
		this._handleInput(e);
		if (this.state.currentQuestion < this.state.questions.length) {
			this.setState({
				currentQuestion: this.state.currentQuestion + 1
			});
		} else {
			this._fetchMeme();
		}
	};
	_updateResponse = () => {
		console.log("Updating");
		const randomNo = Math.floor(Math.random() * this.state.responses.length);
		console.log(randomNo);
		this.setState({
			currentResponse: randomNo
		});
	};

	_handleInput = e => {
		e.preventDefault();
		e.target[0].value = "";
	};

	_fetchMeme = () => {
		getMemes();
	};
	render() {
		return (
			<div className="fortune-teller-view zoomed-in">
				<CrystalBallImage />
				<ChatBubble
					update={this._updateQuestion}
					question={this.state.questions[this.state.currentQuestion]}
				/>
				<ChatResponse
					response={this.state.responses[this.state.currentResponse]}
				/>
				<Head />
				<BackgroundImage />
			</div>
		);
	}
}
