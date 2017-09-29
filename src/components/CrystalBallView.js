import React from "react";
import CrystalBallImage from "./CrystalBallImage";
import CrystalBallButton from "./CrystalBallButton";
import TableImage from "./TableImage";
import CrystalBallTextResponse from "./CrystalBallTextResponse";

export default function CrystalBallView() {
	return (
		<div className="crystall-ball-view">
			<CrystalBallButton />
			<CrystalBallButton />
			<CrystalBallImage />
			<TableImage />
			<CrystalBallTextResponse />
		</div>
	);
}
