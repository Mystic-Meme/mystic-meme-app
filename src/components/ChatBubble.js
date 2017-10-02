import React from "react";
import "../styles/ChatBubble.css";

export default function ChatBubble(props) {
	return (
		<div className="chat-bubble appear">
			<h3 className="appear">{props.question}</h3>
			<form className="appear" onSubmit={props.update}>

				<input type="text" autoFocus />
			</form>
		</div>
	);
}
