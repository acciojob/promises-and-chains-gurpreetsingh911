let sub = document.getElementById("btn");
let first = document.getElementById("age");
let second = document.getElementById("name");



sub.addEventListener('click', function(event) {
event.preventDefault();
  let firVal = first.value;
  let secVal = second.value.trim();
  if(firVal == 0 || secVal.length == 0 ){
  	window:alert("Please enter valid details.")  
     return;
  }
  

  let promise = new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => resolve(`Welcome, ${name}. You can vote.`), 4000);
    } else {
      setTimeout(() => reject(`Oh sorry ${name}. You aren't old enough.`), 4000);
    }
  })
  .then(message => alert(message))
  .catch(message => alert(message));
	
});












