// Write a program that prints out the numbers 1 to 100 (inclusive). 
// If the number is divisible by 3, print _Crackle_ instead of the number. 
// If it's divisible by 5, print _Pop_. If it's divisible by both 3 and 5, print _CracklePop_. You can use any language.



for (let i = 1; i <= 100; i++) {
  let result = '';
  if (i % 3 === 0) result += 'Crackle';
  if (i % 5 === 0) result += 'Pop';
  console.log(result || i);
}