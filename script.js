//adds a coin gif to the body of the page at a random position 
class Coin {
  constructor(body) {
    //create an img HTML element for the coin GIF and set it to the random position
    //requires chrome runtime to access the local directory
    this.coin = document.createElement('img')
    this.coin.src = chrome.runtime.getURL('coin.gif');
    this.coin.setAttribute('id', 'coin')

    this.body = body;
    this.moveCoin();

    this.body.appendChild(this.coin);
  }
  
  moveCoin() {
    //get the size of the board
    let width = window.getComputedStyle(this.body).width;
    width = Number(width.replace('px', ''))
    let height = window.getComputedStyle(this.body).height;
    height = Number(height.replace('px', ''))

    //calculate a random position on the screen based on the current height/width of the screen
    const minLeft = 0;
    const minTop = 0;
    const maxLeft = width - 50;
    const maxTop = height - 50;
    const randomLeft = Math.floor(Math.random() * (maxLeft - minLeft) + minLeft);
    const randomTop = Math.floor(Math.random() * (maxTop - minTop) + minTop);
    
    this.coin.style.cssText = `z-index: 1000; position: absolute; top: ${randomTop}px; left: ${randomLeft}px; width: 2.5%`;
  }
}

//creates score object which increments score after finding each coin
class Score {
  constructor(body) {
    this.body = body;
    this.score = document.createElement('div');
    this.text = document.createElement('p');
    this.count = -1;
    this.incrementScore();
    
    this.score.style.cssText = 'z-index: 999; display: flex; position: fixed; justify-content: center; align-items:center; top: 100px; left: 100px; padding: 10px 25px; margin: 0; border-radius: 5px; font-family: monospace; font-size: 12pt; color: black; background-color: lightgrey; opacity: 50%;';
    this.text.style.cssText = 'margin: 0; padding:0;'
    
    this.score.appendChild(this.text);
    this.body.appendChild(this.score);
  }

  incrementScore() {
    this.count++;
    this.text.innerHTML = 'Score: ' + this.count;
  }
}

const body = document.querySelector('body');
const coin = new Coin(body);
const score = new Score(body);

//add event listeners for clicking on coin
coin.coin.addEventListener('click', coin.moveCoin.bind(coin))
coin.coin.addEventListener('click', score.incrementScore.bind(score))
