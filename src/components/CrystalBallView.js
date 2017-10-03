import React from "react";
import CrystalBallImage from "./CrystalBallImage";
import CrystalBallTextResponse from "./CrystalBallTextResponse";
import BackgroundImage from "./BackgroundImage";


export default function CrystalBallView() {
	return (
<<<<<<< HEAD
		<div className="crystal-ball">
			<h1>
				You should know, not all is as it seems ... <br /> Now choose your
				teller, and recieve you your meme ...
=======
		<div className="crystal-ball-view">
			<h1 className="typewriter">
				You should know, not all is as it seems ...<br/>
				Now choose your teller, and receive you your meme ...
>>>>>>> a1a82c07e5c8a1ed70c7cc6ebb91ea95a6ce4ef9
			</h1>
			{/* <CrystalBallButton /> */}
			{/* <CrystalBallButton /> */}
			<CrystalBallImage  buttons={true} className="crystal-ball"/>
			<CrystalBallTextResponse />
			<BackgroundImage />
		</div>
	);
}
