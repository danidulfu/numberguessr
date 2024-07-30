const prompt=document.querySelector("#prompt")
const guess=document.querySelector('#guess')
const result=document.querySelector("#number")
const target=Math.floor(Math.random()*100)
let counter=10;

console.log(target)
guess.addEventListener("click",e=>{
      e.preventDefault();
      let number=result.value;
      if (number==target) {
        console.log('you got it right!!')
      } else if (number>target) {
        console.log('too high')
      } else {
        console.log("too low")
      }
      console.log(number)
      console.log(counter)
      counter--
  })
// generate random number
// extract guess from input field
// compare to target
// celebrate if got it right
// commiserate if not

// add reset button