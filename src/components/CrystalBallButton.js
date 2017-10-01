import React from "react";
import "../styles/CrystalBallButton.css";

export default function CrystalBallButton(props) {
	return (
		<button className="crystal-ball-btn" >
			{props.name}
		</button>
)
}
