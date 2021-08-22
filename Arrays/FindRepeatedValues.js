/**
 * Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
 * 
 * @author: Samarth BM.
 */

 let i = 1;
 let j = 0;
 const number = [];
 
 while ( i <= 100 ) {
     if ( i % 11 == 0) {
         while ( j < i ) {
             number[j] = i;
             j++;
             break;
         }
     }
     i++;
 }
 console.log('Repeating numbers are: ' +number);