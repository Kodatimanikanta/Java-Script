// 1) Write a program to print the sum of odd digits in the number

numb=1633;
num=String(numb)
add=0;
for(i=0;i<num.length;i++){
if(num[i]%2==1)
{
add+=Number(num[i])
}
}
console.log(add)

//Result : 7

// 2) Write a program to print the difference between even sum and odd sum

numb=163382;
num=String(numb);
evensum=0;
oddsum=0;
for(i=0;i<num.length;i++){
if(num[i]%2==0){
evensum+=Number(num[i])
}
else if(num[i]%2==1){
oddsum+=Number(num[i])
}
}
let z=evensum-oddsum;
console.log(z)

//Result : 9


// 3) Write a program to check whether even sum is greater or odd sum is greater.

numb=123;
num=String(numb);
evensum=0;
oddsum=0;
for(i=0;i<num.length;i++){
if(num[i]%2==0){
evensum+=Number(num[i])
}
else if(num[i]%2==1){
oddsum+=Number(num[i])
}
}
if(evensum>oddsum){
console.log("Evensum is greater")
}
else{
console.log("Oddsum is greater")
}

//Result : Oddsum is greater