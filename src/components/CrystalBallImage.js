import React, { Component } from "react";
import CrystalBallButton from "./CrystalBallButton";
import "../styles/CrystalBallImage.css";

export default class CrystalBallImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: true,
			fadeIn: true,
			fortuneTellers: [
				<img className="ft-selector-ld" src="/img/ld.png"/>,
				<img className="ft-selector-zoltar" src="/img/zoltar-image.png"/>
			]
		};
	}
	_showButtons = () => {
		const btn = document.querySelectorAll(".crystal-ball-btn");
		if (this.state.start) {
			btn.forEach(button => {
				button.classList.toggle("fadeInUp");
			});
			this.setState({
				start: false,
				fadeIn: true
			});
		} else if (this.state.fadeIn) {
			btn.forEach(button => {
				button.classList.toggle("fadeInUp");
				button.classList.toggle("fadeOutDown");
			});
			this.setState({
				fadeIn: false
			});
		} else if (!this.state.fadeIn) {
			btn.forEach(button => {
				button.classList.toggle("fadeInUp");
				button.classList.toggle("fadeOutDown");
			});
			this.setState({
				fadeIn: true
			});
		}
	};

	render() {
		return (
			<div className="ball-view">
				<div className="fortune-tellers">
					{this.state.fortuneTellers.map(ft => {
						return <CrystalBallButton key={ft} name={ft} />;
					})}
				</div>
				<img
					onClick={this.state.buttons ? this._showButtons : null}
					className="crystal-ball-image"
					src="/img/crystal.png"
				/>
			</div>
		);
	}
}
