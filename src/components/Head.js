import React from "react";
import Hand from "./Hand"
import "../styles/FortuneTellerView.css"

const Head = () => {
	return (
		<div className="fortune-teller-cont">
			<img src="/img/ld.png" alt="Larry David" className="ld-head"/>
			<Hand />
		</div>
	);
};

export default Head;
