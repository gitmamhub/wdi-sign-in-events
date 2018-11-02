function primen(number){

  for (var i = 2; i < number/2; i++) {
        if((number%i) === 0){ return 1;}
      }
      return 0;
}
  console.log(1+ " is prime" + 1);
  console.log(2 + " is prime" + 2);
let j = 3;
// let totalPrime = 0;
for (var  i = 3;; i=i+2)
{

  // totalPrime = i ;
  if (primen(i) === 0) {
    console.log(i + " is prime" + j);
    j+=1;
    // totalPrime +=1;
  }

  if (j > 100) break;
  // totalPrime +=1;
  // if(totalPrime == 30){break;}
}
// var localPrime = primen (10);
//
// console.log("your number is " +localPrime);
