import React from "react";

export default function Meme(props) {
	return (
		<div className="memeCont">
			<img src={props.meme} className="meme" />
		</div>
	);
}
