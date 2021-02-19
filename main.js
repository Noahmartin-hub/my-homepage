//スライドショーで並べたい写真を配列形式に
const images = [
  "./images/me-1.jpg",
  "./images/me-2.jpg",
  "./images/me-3.jpg",
  "./images/me-6.jpg",
  "./images/me-7.jpg",
  "./images/me-8.jpg",
  "./images/me-10.jpg",
  "./images/me-11.jpg",
  "./images/me-24.jpg",
  "./images/me-26.jpg",
 
];

  let count = 0;
const slideimage =()=>{
  //もし(if)、countが画像の枚数より多ければ、変数countを0に戻す
  if( count >= images.length){
    count = 0;
  //そうでなければ(else)、最初に定義した配列imagesの"count"番目の画像を表示させる
  }else{
    document.getElementById('slideshow').src = images[count];
    count++;
  }
}

let slideid = 0;
const startstop = () =>{
  if(slideid === 0){//開始ボタンを押した時の処理内容
    slideid = setInterval(slideimage, 1400);
  　}else{ //停止ボタンを押した時の処理内容
    　clearInterval(slideid);
    　slideid = 0;
  　}
}
document.getElementById('startstopbtn').onclick = startstop;