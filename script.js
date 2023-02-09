//1. figure out how to make an extension
  //create a manifest.json file in root folder

//2. figure how to randomly select an element
  //maybe traverse the DOM tree

  //

// alert("Hello!");

class Coin {
  constructor() {
    //create an img HTML element for the coin GIF and set it to the random position
    this.coin = document.createElement('img')
    this.coin.src = 'https://i.pinimg.com/originals/b0/b7/64/b0b76439e5cd5ef9bab27e83c4fdb2f2.gif';
    this.coin.setAttribute('id', 'coin')

    this.body = document.querySelector('body');
    this.moveCoin();

    // this.moveCoin.bind(this)

    this.body.appendChild(this.coin);
  }
  
  moveCoin() {
    console.log('moved');
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

    this.coin.style.cssText = `z-index: 1000; position: absolute; top: ${randomTop}px; left: ${randomLeft}px; width: 5%`;
  }

}

const coin = new Coin();

coin.coin.addEventListener('click', coin.moveCoin.bind(coin))
// coin.moveCoin())