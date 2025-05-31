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
  if (firVal >= 18) {
    setTimeout(() => {
      alert(`Welcome, ${secVal}. You can vote.`);
    
      resolve(); // Resolve the promise
    }, 4000);
  } else {
    setTimeout(() => {
      alert(`Oh sorry ${secVal}. You aren't old enough.`);
            reject(); // Reject the promise
    }, 4000);
  }
});
	
});












