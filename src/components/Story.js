import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Story(props) {
	return (
		<div>
			<h1 className="title-card" style={props.style}>
				{props.stories[props.storyNo]}
			</h1>
			<Link to={ props.storyNo < 1 ? "" : "/crystal" }>
				<button
					onClick={props.updateStory}
					style={props.style}
					className="story-btn"
				>
					Continue
				</button>
			</Link>
		</div>
	);
}
