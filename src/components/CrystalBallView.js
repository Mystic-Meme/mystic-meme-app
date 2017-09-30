import React from "react";
import CrystalBallImage from "./CrystalBallImage";
import CrystalBallButton from "./CrystalBallButton";
import CrystalBallTextResponse from "./CrystalBallTextResponse";
import BackgroundImage from "./BackgroundImage";

export default function CrystalBallView() {
	return (
		<div className="crystall-ball-view">
			<BackgroundImage />
			<CrystalBallButton />
			<CrystalBallButton />
			<CrystalBallImage />
			<CrystalBallTextResponse />
		</div>
	);
}
