import React, { Component } from "react";

import Hand from "./Hand";
import Head from "./Head";
import CrystalBall from "./CrystalBall";
import ChatBubble from "./ChatBubble";

export default class FortuneTeller extends Component {
	constructor() {
		super();
		this.state = {
			questions: [],
			responses: [],
			userInput: []
		};
	}

	render() {
		return (
			<div className="fortune-teller">
				<Head />
				<Hand />
				<CrystalBall />
				<ChatBubble />
			</div>
		);
	}
}
