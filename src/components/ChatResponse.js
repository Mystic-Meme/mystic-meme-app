import React from "react";
import "../styles/ChatResponse.css";

export default function ChatResponse(props) {
	return <h3 className="chat-response appear">{props.response}</h3>;
}
