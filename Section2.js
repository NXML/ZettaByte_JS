
//Section 2 question 3
function someAssyncMethod(action){
    // Simulate an asynchronous method
    setTimeout( function(){
      action(2)
    }, 500 );
  }
//define a callback method
  function callback(){
    console.log(2);
  }
//call a method with a callback in parameter
someAssyncMethod(callback)


const isPalindrome = (s)=>{
    for (let i = 0; i < s.length/2; i++) {
        if(s[i]!=s[string.length-1-i])
            return s
    }
    return true;
}

console.log(isPalindrome("teeteet")) // return true
console.log(isPalindrome("I enhoy this test"))// return false