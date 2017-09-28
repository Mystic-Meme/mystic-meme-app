import React from "react";
import CrystalBallImage from "./CrystalBallImage";
import CrystalBallButton from "./CrystalBallButton";
import CrystalBallTextResponse from "./CrystalBallTextResponse";

export default function CrystalBallView() {
	return (
		<div className="crystall-ball-view">
			<CrystalBallButton />
			<CrystalBallButton />
			<CrystalBallImage />
			<CrystalBallTextResponse />
		</div>
	);
}
