import './style.css';
import GameAPI from '../modules/games-api';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameName = 'Kika Games';
const gameId = GameAPI.checkGame(url, gameName);
const addBtn = document.getElementById('btn');
const reloadBtn = document.getElementById('reload-btn');

addBtn.addEventListener('click', () => {
  const userS = document.getElementById('name').value;
  const scoreS = document.getElementById('score').value;
  const data = {
    user: userS,
    score: scoreS,
  };
  if (gameId.length > 0) {
    GameAPI.postScores(url + gameId + '/scores/', data);
  }
});

window.addEventListener('load', () => { 
  GameAPI.getScores(url + gameId + '/scores/');
});

reloadBtn.addEventListener('click', () => {
  if (gameId.length > 0) {
    window.history.go(0);
    GameAPI.getScores(url + gameId + '/scores/');
  }
});
