let n=[1,2,3,4,5,6];
var add=0;
for(i=0;i<=n.length;i++){
    if(n[i]%2==0){
    add=add+n[i];
}
}
console.log(add);

// Result : 12

let i=1;
do{
    if(i!=5)
    console.log(i);
    i++;
}while(i<=10)

//  Result : 1 2 3 4 6 7 8 9 10

let checkPalindrome = (stringg) => {
  return stringg === stringg.split("").reverse().join("");
};

console.log("Is Palindrome? : " + checkPalindrome("mom"));
console.log("Is Palindrome?: " + checkPalindrome("father"));

//Result : Is Palindrome? : true
         //Is Palindrome?: false

let num=10;
do{
    if(num%2==1){
        console.log(num);
        
    }
    else{
        console.log("skipping even number");
        
    }
    num--
    
}while(num>=1)

  //Result :skipping even number
//9
//skipping even number
//7
//skipping even number
//5
//skipping even number
//3
//skipping even number
//1

let arr=[10,20,30,40]
let sum=0;
for(i=0;i<arr.length;i++){
    sum=sum+arr[i]; 
    
}
let avg=sum/arr.length;
if(avg<50){
    console.log(avg)
}
while(avg>50){
    console.log("average is large");
}

// Result : 25

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    
    console.log(str.repeat(i));
}

// Result :
* 
* *
* * *
* * * *
* * * * *