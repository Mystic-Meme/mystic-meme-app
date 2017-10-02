import React from "react";
import "../styles/ChatBubble.css";

export default function ChatBubble(props) {
	return (
		<div className="chat-bubble">
			<h3>{props.question}</h3>
			<form onSubmit={props.update}>
				<input type="text" autoFocus />
			</form>
		</div>
	);
}
