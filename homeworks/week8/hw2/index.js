/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
const url = 'https://api.twitch.tv/kraken/';
const clientID = 'cwu1y8ngsucir4uoy03v1h6lnx0i2t';
const cardTemplate = `
<div class="card">
  <div class="ribbon-wrap top_1">
    <div class="ribbon">Top 1</div>
  </div>
  <div class="ribbon-wrap top_2">
    <div class="ribbon">Top 2</div>
  </div>
  <a href="$url" class="card-item" target="_blank">
    <div class="card-top">
      <img src="$preview" alt="">
    </div>
    <div class="card-bottom">
      <div class="user-avatar">
        <img src="$logo" alt="">
      </div>
      <div class="card-info">
        <p class="card-title">$status</p>
        <p class="card-text">$name</p>
      </div>
    </div>
  </a>
</div>`;
const emptyCard = `
<div class="empty-card">
    <a href="" class="more-card-btn">More Streams</a>
</div>`;
const navbar = document.querySelector('.nav-button');
const gameslimit = 5;
const streamsLimit = 20;
let currentGame = '';
let offset = 0;

getTopGames((topGames) => {
  renderNavbar(topGames);
  // eslint-disable-next-line prefer-destructuring
  currentGame = topGames[0];
  document.querySelector('.title').innerText = currentGame;
  getStreams(topGames[0], game => renderStreamCards(game));
});

function getTopGames(callback) {
  const request = new XMLHttpRequest();
  request.open('Get', `${url}games/top?limit=${gameslimit}`);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.setRequestHeader('Client-ID', clientID);
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const response = JSON.parse(request.responseText);
      console.log(response);
      const topGames = response.top.map(data => data.game.name);
      console.log(topGames);
      callback(topGames);
    }
  };
}

function getStreams(game, callback) {
  const request = new XMLHttpRequest();
  // eslint-disable-next-line no-param-reassign
  game = encodeURIComponent(game);
  request.open('Get', `${url}streams?game=${game}&limit=${streamsLimit}&offset=${offset}`);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.setRequestHeader('Client-ID', clientID);
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const response = JSON.parse(request.responseText);
      console.log(response);
      const { streams } = response;
      callback(streams);
    }
  };
}

navbar.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'button') {
    currentGame = e.target.innerText;
    document.querySelector('.title').innerText = currentGame;
    offset = 0;
    getStreams(currentGame, streams => renderStreamCards(streams));
  }
});

function renderNavbar(topGames) {
  for (const game of topGames) {
    const element = document.createElement('button');
    element.textContent = game;
    navbar.appendChild(element);
  }
}

function appendEmptyCard() {
  const element = document.createElement('div');
  document.querySelector('.live-list').appendChild(element);
  element.outerHTML = emptyCard;
}

function removeEmptyCard() {
  document.querySelectorAll('.empty-card').forEach(item => item.remove());
}

function renderStreamCards(streams) {
  if (offset === 0) {
    document.querySelector('.live-list').innerHTML = '';
  }
  for (const stream of streams) {
    const element = document.createElement('a');
    const cardItem = cardTemplate
      .replace('$url', stream.channel.url)
      .replace('$preview', stream.preview.large)
      .replace('$logo', stream.channel.logo)
      .replace('$status', stream.channel.status)
      .replace('$name', stream.channel.name);
    document.querySelector('.live-list').appendChild(element);
    element.outerHTML = cardItem;
  }
  appendEmptyCard();
  if (offset <= 900) {
    loadMoreCards();
  }
}

function loadMoreCards() {
  document.querySelector('.more-card-btn').addEventListener('click', (e) => {
    e.preventDefault();
    offset += streamsLimit;
    getStreams(currentGame, (streams) => {
      removeEmptyCard();
      renderStreamCards(streams);
    });
  });
}
