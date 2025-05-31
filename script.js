let sub = document.getElementById("btn");
let first = document.getElementById("age");
let second = document.getElementById("name");



sub.addEventListener('click', function(event) {
event.preventDefault();
  let firVal = first.value;
  let secVal = second.value;
  if(firVal == 0 || secVal.length == 0 ){
  	alert("Please enter valid details.")  
     return;
  }
  

  let promise = new Promise((resole, reject)=>{
  if(firVal >= 18){
  setTimeout(()=> alert(`Welcome, ${secVal}. You can vote.`), 4000)  
  }else{
    setTimeout(()=> alert(`Oh sorry ${secVal}. You aren't old enough.`), 4000)  
  }

}); 
	
});

