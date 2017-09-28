import React, { Component } from "react";

export default function Story(props) {
	return (
		<div>
			<h1 className="title-card" style={props.style}>
				{props.stories[props.storyNo]}
			</h1>
			<button
				onClick={props.updateStory}
				style={props.style}
				className="story-btn"
			>
				Continue
			</button>
		</div>
	);
}
