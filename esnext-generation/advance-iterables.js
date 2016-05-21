 module.exports = function generate(isEven) {
     // return an Iterator for even numbers if isEven is true
     // or, return an Iterator for odd numbers if isEven is false
     // If `.next(swap)` receives `true`, swap between even <-> odd
     var number = 0;

     return {
         next: function(swap) {
             isEven = swap ? !isEven : isEven;
             while (++number) {
                 if (isEven && (number % 2 === 0))
                     break;

                 if (!isEven && (number % 2 === 1))
                     break;
             }

             return {
                 value: number,
                 done: false
             };
         }
     }
 }