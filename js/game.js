var c = document.getElementById("canvas");
var cont = document.getElementById("contId");
var but1 = document.getElementById("but_1");
var but2 = document.getElementById("but_2");
var but3 = document.getElementById("but_3");
var but4 = document.getElementById("but_4");
var but5 = document.getElementById("but_5");
var but6 = document.getElementById("but_6");
var ctx = c.getContext("2d");
var image = new Image();
var selbut = 0;
image.src = "img/wheather.jpg"
const error = new Audio();
error.src = "sound/error.mp3"
const noOption = new Audio();
noOption.src = "sound/noOption.mp3"
const fantastic = new Audio();
fantastic.src = "sound/fantastic.mp3"
const good = new Audio();
good.src = "sound/good.mp3"
const right = new Audio();
right.src = "sound/right.mp3"
var sel = null;
var sel = null;
class Option {
  constructor(sound, x1, x2, y1, y2){
    this.audio = new Audio();
    this.audio.src = sound;
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.intentos = 0;
    this. acertado = false;
  }
}
const windy = new Option("sound/windy.mp3", 0.64,1,0.54,1);
const sunny = new Option("sound/sunny.mp3", 0,0.28,0,0.43);
const cloudy = new Option("sound/cloudy.mp3", 0.28,0.58,0,0.41);
const snowy = new Option("sound/snowy.mp3", 0,0.28,0.54,1);
const rainy = new Option("sound/rainy.mp3", 0.28,0.54,0.43,1);
const stormy = new Option("sound/stormy.mp3", 0.58,1,0,0.41);
var ordoption = [windy, sunny, cloudy, snowy, rainy, stormy];
var options = [null, null, null, null, null, null];
var counter = 0;
while (counter < 6) {
  var position = Math.floor(Math.random() * 6);
  if (options [position] == null) {
    options [position] = ordoption [counter];
    counter ++;
  }
}
document.getElementsByTagName("BODY")[0].onload = function() {dimSet();};
document.getElementsByTagName("BODY")[0].onresize = function() {dimSet();};
function dimSet() {
  cont.height = window.innerHeight * 0.96;
  cont.width = window.innerWidth * 0.96;
  ctx.drawImage(image, 0, 0,c.width, c.height );

}
c.addEventListener("click", function(e){
  var xclic = e.clientX/c.scrollWidth;
  var yclic = e.clientY/c.scrollHeight;

  if(sel == null){noOption.play();}
  else if(xclic > sel.x1 && xclic < sel.x2 && yclic > sel.y1 && yclic < sel.y2){
    if (sel.intentos <= 1) {
      fantastic.play();
    }else if (sel.intentos == 2) {
      good.play();
    }else {
      right.play();
    }
    sel.acertado = true;
    sel = null;
    document.getElementById("good_but"+selbut).style.display = 'inline-block';
    document.getElementById("sound_but"+selbut).style.display = 'none';
  }else {
    error.play();
    sel.intentos++;
    console.log(sel.intentos);
  }
})

but1.addEventListener("mousedown", function(){
  if (options[0].acertado == false){
    sel = options [0];
    selbut = 1;
    sel.audio.play();
  } else {
    noOption.play();
    sel = null;
  }
})
but2.addEventListener("mousedown", function(){
  if (options[1].acertado == false){
  sel = options [1];
  selbut = 2;
  sel.audio.play();
} else {
  noOption.play();
  sel = null;
}
})
but3.addEventListener("mousedown", function(){
  if (options[2].acertado == false){
  sel = options [2];
  selbut = 3;
  sel.audio.play();
} else {
  noOption.play();
  sel = null;
}
})
but4.addEventListener("mousedown", function(){
  if (options[3].acertado == false){
  sel = options [3];
  selbut = 4;
  sel.audio.play();
} else {
  noOption.play();
  sel = null;
}
})
but5.addEventListener("mousedown", function(){
  if (options[4].acertado == false){
  sel = options [4];
  selbut = 5;
  sel.audio.play();
} else {
  noOption.play();
  sel = null;
}
})
but6.addEventListener("mousedown", function(){
  if (options[5].acertado == false){
  sel = options [5];
  selbut = 6;
  sel.audio.play();
} else {
  noOption.play();
  sel = null;
}
})

document.getElementById("good_but1").style.display = 'none';
document.getElementById("good_but2").style.display = 'none';
document.getElementById("good_but3").style.display = 'none';
document.getElementById("good_but4").style.display = 'none';
document.getElementById("good_but5").style.display = 'none';
document.getElementById("good_but6").style.display = 'none';
