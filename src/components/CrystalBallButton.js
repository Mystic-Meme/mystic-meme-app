import React from "react";
import { Link } from "react-router-dom";
import "../styles/CrystalBallButton.css";

export default function CrystalBallButton(props) {
	return (
		<button className="crystal-ball-btn">
			<Link to="/fortune">{props.name}</Link>
		</button>
	);
}
