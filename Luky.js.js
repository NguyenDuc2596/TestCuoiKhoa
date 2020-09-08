function number() {
let n = document.getElementById('st1').value;
let m =Number(Math.random());


var count = 0;
var numberClick = document.getElementById('st1');
var displayCount = document.getElementById('st1');
numberClick.onclick = function(){
  count++;
  if (count > 3) {
      alert("Dự đoán sai r ")
  }

}




if(n >10 ){
    alert('Xin nhập lại')

}
else if ( n<0) {

    alert("xin nhập lại")
}
else if( n === 3 ){

    document.getElementById('ketqua').innerHTML =`Bạn đã trúng thưởng`
}
else if (n !== 3 ){

    document.getElementById('ketqua').innerHTML= `Ket qua xo so la : ${3}`  ;

}





}





