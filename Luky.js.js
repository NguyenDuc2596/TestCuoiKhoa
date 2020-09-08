let count = 0;
let luckyNumber = parseInt(Math.random() * 10 + 1);
console.log(luckyNumber);
let guess;
localStorage.setItem('onCount',count);
function check() {
        guess = Number(document.getElementById("nhap-so").value);
        if (guess === luckyNumber) {
            document.getElementById('ketqua').innerHTML =`Chúc mừng bạn! Số may mắn là ${luckyNumber}`;
        }
        else {
            document.getElementById('nhap-so').value = '';
        }
}
function onCount() {
    count++;
    if (count > 2 && guess!== luckyNumber) {
        document.getElementById('ketqua').innerHTML =` Bạn thua. Số may mắn là ${luckyNumber}`;
    }
}





