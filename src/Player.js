import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component{
		render() {
		const {removePlayer,id,name,score,changeScore}=this.props;
		return(
		<div className="player">
		<span className="player-name">
			{/*3. 콜백 펑션 호출*/}
			<button className="remove-player" onClick={() => removePlayer(id)}> X </button>
			{name}
		</span>
			<Counter score={score} changeScore={changeScore} id={id} />
		</div>
	);
	}
	shouldComponentUpdate(nextProps, nextState, nextContext) {
			//shallow compar...
			return nextProps.score !== this.props.score? true:false;
	}
}
