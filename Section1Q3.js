//Section 1 Question 3

var arr = [0, 1, 2];
 const input = [3,-1, 4,-2]
 function insert(array){
     for (let index = 0; index < array.length; index++) {
         const item = array[index];
         //if eaven
         if(index%2==0){
             arr.push(item)
         }else{
             arr.unshift(item)
         }
         
     }

 }
 insert(input);
 console.log(arr); //output should be [ -2, -1, 0, 1, 2, 3, 4 ]