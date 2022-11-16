/*
export default class GameAPi {
  constructor() {
    this.gameName = '{ "name": "Card Scores"}';
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.gameID = createGame().then((result) => {
      return result;
    });
  }

  sendRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open(method, url);
      req.responseType = 'json';
      req.onload = () => {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject('Game not yet created');
        }
      };
      req.send(JSON.stringify(data));
    });
    return promise;
  }

  static getScore() {
    if (this.gameID) {
      return this.sendRequest('GET', this.url);
    }
    return "No scores added";
  }

  addScores(gname, gscore) {
    if (this.game) {
      return sendRequest('POST', this.url, {name: gname, score: gscore});
    } else {
      const result = this.createGame(this.gameName);
      if (result) {
        return sendRequest('POST', this.url, {name: gname, score: gscore});
      } else {
        return "Could not create game";
      }
    }
  }

  createGame() {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('POST', this.url);
      req.onload = () => {
        if (req.status === 200) {
          const res = req.response.result.split(' ');
          if (res[res.length - 1].split('.')[0] == 'Added') {
            const gameId = res[3];
            resolve(gameId);
          }
          resolve(req.response);
        } else {
          reject(false);
        }
      }
    });
  }
}
*/