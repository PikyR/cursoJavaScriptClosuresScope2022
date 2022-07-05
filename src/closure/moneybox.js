function firstMmoneyBox(coin) {
  let savedCoins = 0;
  savedCoins += coin;

  return console.log(`Saved: $ ${savedCoins}`);
}

// firstMmoneyBox(99); // Saved: $ 99
// firstMmoneyBox(1); // Saved: $ 1

function moneyBox() {
  let savedCoins = 0;

  //closure
  function couter(coins) {
    savedCoins += coins;
    console.log(`Saved: $ ${savedCoins}`);
  }

  return couter;
}

const myMoneyBox = moneyBox();
myMoneyBox(99); // Saved: $ 99 
myMoneyBox(1); // Saved: $ 100
myMoneyBox(100); // Saved: $ 200

const anaMoneyBox = moneyBox();
anaMoneyBox(1); // Saved: $ 1
anaMoneyBox(10); // Saved: $ 11
anaMoneyBox(100); // Saved: $ 111
