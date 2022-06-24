let n = 234;

 var b;
 let sum = 0;

 while(n > 0)
 {
      b =(n % 10);
      n = (n - b)/10; 
      sum = (sum*10)+b;
  }
  console.log(sum);