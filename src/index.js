import './style.css';
import GameAPI from '../modules/games-api.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameName = 'Kika Games';
const gameId = GameAPI.checkGame(url, gameName);
const newUrl = url.concat(gameId, '/scores/');

const addBtn = document.getElementById('btn');
const reloadBtn = document.getElementById('reload-btn');

addBtn.addEventListener('click', () => {
  const userS = document.getElementById('name').value;
  const scoreS = document.getElementById('score').value;
  if (userS == "" || scoreS == "") {
    return false;
  }
  const data = {
    user: userS,
    score: scoreS,
  };
  if (gameId.length > 0) {
    GameAPI.postScores(newUrl, data);
  }
});

window.addEventListener('load', () => {
  GameAPI.getScores(newUrl);
});

reloadBtn.addEventListener('click', () => {
  if (gameId.length > 0) {
    window.history.go(0);
    GameAPI.getScores(newUrl);
  }
});
