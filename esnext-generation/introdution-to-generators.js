 module.exports = function* generate(isEven) {
     // return an Iterator for even numbers if isEven is true
     // or, return an Iterator for odd numbers if isEven is false
     // If `.next(swap)` receives `true`, swap between even <-> odd
     var number = 0;
     
     while (++number) {
         if (isEven && (number % 2 === 0))
             yield number;

         if (!isEven && (number % 2 === 1))
             yield number;
     }
 }