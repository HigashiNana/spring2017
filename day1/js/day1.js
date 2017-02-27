console.log("てすと");
//var main = document.getElementsByClassNmame("main");
//main[0].insertAdjacentHTML('afterbegin','<p>てすと</p>');
//document.getElementByClassNmame("main").innerHTML("メイン");

function sample(){
  console.log("テスト");
}
sample();
var Cat = function(name){
  this.name = name;
  this.run = function(){
    console.log(this.name+"が走る");
  };
};
var rei = new Cat('レイ');
rei.run();
console.log(rei.name);
