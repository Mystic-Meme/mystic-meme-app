import React from "react";
import CrystalBallImage from "./CrystalBallImage";
import CrystalBallTextResponse from "./CrystalBallTextResponse";
import BackgroundImage from "./BackgroundImage";
import CrystalBallButton from "./CrystalBallButton"

export default function CrystalBallView() {
	return (
		<div className="crystal-ball-view zoomed-in">
			<h1>
				You should know, not all is as it seems ... <br /> Now choose your
				teller, and recieve you your meme ...
			</h1>
			{/* <CrystalBallButton /> */}
			{/* <CrystalBallButton /> */}
			<CrystalBallImage  className="CrystalBallImage"/>
			<CrystalBallTextResponse />
			<BackgroundImage />
		</div>
	);
}
