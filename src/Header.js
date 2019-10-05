import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
// function component 만드는 법
// 1. 첫글자가 대문자
// 2. React Elemement를 리턴
export const Header = ({players,title}) => {
	return (
		<header className="header">
			<Stats players={players} />
			<h1 className="h1">{title}</h1>
			<Stopwatch/>
		</header>
	);
}

Header.propTypes={
	players:PropTypes.arrayOf(PropTypes.object)
	/*players:PropTypes.arrayOf(
	PropTypes.Shape({
	id:PropTypes.number,
	score:PropTypes.number,
	name:PropType.string}))*/,
	title:PropTypes.string
}

Header.defaultProps={
	title:'Scoreboard'
}