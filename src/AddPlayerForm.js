import React from 'react';

export class AddPlayerForm extends React.Component {
	textInput=React.createRef();
	handleSubmit = (e) => {
		e.preventDefault();

		const form = document.getElementById("form");
		const player = document.getElementById("player");
		console.log(form.checkValidity());
		console.log(player.validity.valid);

		this.props.addPlayer(this.textInput.current.value);
		e.currentTarget.reset();
	}

	render() {
		return (
			<form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
				<input id="player" ref={this.textInput} className="input" type="text" placeholder="enter a player's name"
							 required></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}
