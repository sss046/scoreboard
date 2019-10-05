import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Player} from "./Player";
import {AddPlayerForm} from "./AddPlayerForm";
import {connect} from "react-redux";

class App extends React.Component {
	maxId=4;//class 속성, 접근할시 this. 붙일것
 /* props = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4}
    ]
  } //class 속성*/
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.props.players} />

        {
          this.props.players.map((player) => {
            return (
              <Player name={player.name} score={player.score} id={player.id} key={player.id}
                // 2. props로 콜백 펑션을 전달
                      removePlayer={this.handleRemovePlayer}
                      changeScore={this.handleChangeScore}/>
            )
          })
        }

        <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
      </div>
    );
  }
  // 1. 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore: ', id, delta);
    this.setState(prevState => {
      return {
        player: prevState.players.map(player => {
          if (player.id === id) {
            player.score += delta;
          }
          return player;
        })
      }
    })
  }

  handleAddPlayer=(name)=>{
  	console.log('handleAddPlayer',name);
  	this.setState(prevState=>{
  		/*prevState.players.push({name:name,id:++this.maxId,score:0});
  		return{
  			players:[...prevState.players]//새로운 바구니에 옮겨담기
			}*/

  		const players=[...prevState.players];//원본배열 훼손 x
			players.push({name/*name:name*/,id:++this.maxId,score:0});
			return{
				//players:players
				players
			}
		});
	}
}

const mapStateToPtops =(state) =>({
	//왼쪽은 props,오른쪽이 store state
	players:state.playerReducer.players
})

export default connect(mapStateToPtops)(App);