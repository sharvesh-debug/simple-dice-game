 var r1= Math.floor( 1+6*Math.random());
 var  r2= Math.floor( 1+6*Math.random());


if(r1==1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}else if (r1==2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}else if (r1==3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}else if (r1==4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}else if (r1==5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}else if (r1==6) {
  document.querySelector(".img1").setAttribute("src","images/dice6.png");

}
if(r2==1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}else if (r2==2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}else if (r2==3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}else if (r2==4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}else if (r2==5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}else if (r2==6) {
  document.querySelector(".img2").setAttribute("src","images/dice6.png");

}


if(r1==r2){
  document.querySelector("h1").textContent="draw!";
}else if (r1>r2){


  document.querySelector("h1").textContent=" player 1 wins";


}else {
  document.querySelector("h1").textContent=" player 2  wins";
}
