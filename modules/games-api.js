export default class GameAPi {
  constructor(name, url) {
    this.gameName = name;
    this.url = url;
  }

  static async createGame(gameName, url) {
    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify( { name: gameName } ),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const myGame = json.result.split(' ');
        const gameId = myGame[3];
        localStorage.setItem('MyGame', JSON.stringify(gameId));
      });
    return result;
  }

  static checkGame(url, gameName) {
    const gameId = JSON.parse(localStorage.getItem('MyGame') || '[]');
    if (gameId.length < 1) {
      this.createGame(gameName, url);
    } else {
      return gameId;
    }
    return false;
  }

  static async postScores(url, data) {
    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        document.querySelector('.result').innerHTML = 'The score has been added';
        this.previewScore(document.getElementById('ul'), [data.user, data.score]);
      });
    return result;
  }

  static previewScore(div, data) {
    div.innerHTML += `<li class="score-li"><span>${data[0]}</span>:<span>${data[1]}</span>`;
  }

  static async getScores(url) {
    const scores = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => this.displayScores(json.result));
    return scores;
  }

  static displayScores(data) {
    const ul = document.getElementById('ul');
    data.forEach((element) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'score-li');
      li.innerHTML = `<span>${element.user}</span> : <span>${element.score}</span>`;
      ul.appendChild(li);
    });
  }
}
