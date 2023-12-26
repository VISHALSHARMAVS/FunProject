const container = document.getElementById("container");
const animation = document.getElementById("animation");
const heading = document.getElementById("heading");
const animatedImg = document.getElementById("animatedImg");
const button = document.getElementById("button");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");




function myFunction(){
  heading.innerHTML="<h1>Yeeyy ! Finally</h1>";
  var newAnimation=animation.querySelector('img');
  newAnimation.src="https://i.postimg.cc/wTDG30TB/yes.gif";
  newAnimation.alt="";
  

  button.removeChild(yesButton);
  button.removeChild(noButton);

  var newButton = document.createElement('button');
  newButton.innerHTML="Let's Fix a Date";
  newButton.onclick =function nextPage() {
    var instagramDMUrl = "https://www.instagram.com/direct/t/__vishal.sharma7__";
    window.open(instagramDMUrl, '_blank');
  };
newButton.className="btn";
  button.appendChild(newButton);
}

function moveButton() {
    var x =
      Math.random() *
      (window.innerWidth -
        document.getElementById("noButton").offsetWidth);
    var y =
      Math.random() *
      (window.innerHeight -
        document.getElementById("noButton").offsetHeight);
    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
  }