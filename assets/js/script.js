//Variables game Initiation
let score = 0;
let clickMultiplier = 1;
let autoMultiplier = 0;
let bitCoin;
let autoclick;
const TIME_INTERVAL = 500;
//Execute at the click of bitcoin
function bitcoinClick() {
    score += (clickMultiplier * 1);
    console.log(score);
}
//Execute every TIME_INTERVAL ms
function autoclickUp() {
    score += (autoMultiplier * 1);
}
//Set game at the start
(() => {
    bitcoin = document.getElementById("BTC");
    document.getElementById("BTC").addEventListener("click", () => {
        bitcoinClick();
    });
    autoclick = setInterval(() => {
        autoclickUp();
    }, TIME_INTERVAL);

})();