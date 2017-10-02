import React, { Component } from "react";
import { Motion, spring } from "react-motion";
import Story from "./Story";
import "../styles/Title.css";

export default class Title extends Component {
	constructor() {
		super();
		this.state = {
			storyNo: 0,
			stories: [
				"The door creaks as you push it in, then step into the dim light of a small cluttered room. The smell reminds you of your grandparents' attic, the smell of things long forgtten, memories that have faded to dust...",
				"The feelings of doubt you felt prior to stepping in fall away like dead leaves. You find youself believing in something greater for the first time in a while. As you turn the corner, you see..."
			]
		};
	}
	_updateStory = () => {

		const num = this.state.storyNo;
		this.setState({
			storyNo: num + 1
		});
		if (this.state.storyNo >= 2) {
			document.querySelector(".title").style.display = "none";
		}
		console.log(this.state.storyNo);
	};

	render() {
		return (
			<div className="title">
				<Motion
					defaultStyle={{ opacity: 0 }}
					style={{ opacity: spring(1, { stiffness: 5 }) }}
				>
					{interpolatingStyle => (
						<Story
							updateStory={this._updateStory}
							stories={this.state.stories}
							storyNo={this.state.storyNo}
							style={interpolatingStyle}
						/>
					)}
				</Motion>
			</div>
		);
	}
}
