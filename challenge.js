{/* <body>
  <button class="challenge"
        type="button">
      click 
</button>
</body> */}


// document.querySelector(".challenge").addEventListener("click", function () {
//   // document.querySelector(".body") 
//   //  body.style.color = challenge.target;
//   document.getElementById(".challenge").style.backgroundColor = "lightblue";
// })


// function myChallenge() {
//   document.body.style.backgroundColor = 'blue';
// }
 

function myChallenge() {
  var body = document.body;

  if (body.classList.contains('clicked')) {
    body.classList.remove('clicked');
  } else {
    body.classList.add('clicked');
  }
}