/**
 * Write a program in the following steps
    a. Roll a die and find the number between 1 to 6
    b. Repeat the Die roll and find the result each time
    c. Store the result in a dictionary
    d. Repeat till any one of the number has reached 10 times
    e. Find the number that reached maximum times and the one that was for minimum times
 *
 * @author: Samarth BM.
 */

    let myMap = new Map();
    let MAXCOUNT = 10;
    let count = 1, count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0;
    let i = 1, j = 1, k = 1, l = 1, m = 1, n = 1;
     
    while ( (i <= MAXCOUNT) && (j <= MAXCOUNT) && (k <= MAXCOUNT) && (l <= MAXCOUNT) && (m <= MAXCOUNT) && (n <= MAXCOUNT) ) {
        let die_roll = Math.floor ( Math.random() * 6 ) + 1;
        myMap.set(count, die_roll);
        switch(die_roll) {
            case 1:
                while ( count1 <= MAXCOUNT ) {
                    count1++;
                    i++;
                    break;
                }
                break;
            case 2:
                while ( count2 <= MAXCOUNT ) {
                    count2++;
                    j++;
                    break;
                }
                break;
            case 3:
                while ( count3 <= MAXCOUNT ) {
                    count3++;
                    k++;
                    break;
                }
                break;
            case 4:
                while ( count4 <= MAXCOUNT ) {
                    count4++;
                    l++;
                    break;
                }
                break;
            case 5:
                while ( count5 <= MAXCOUNT ) {
                    count5++;
                    m++;
                    break;
                }
                break;
            case 6:
                while ( count6 <= MAXCOUNT ) {
                    count6++;
                    n++;
                    break;
                }
                break;                
        }
        count++;
    }
    
    console.log(myMap);
    
    if ( count1 == MAXCOUNT ) {
        console.log ("1 has reached maximum count.");
    }
    else if( count2 == MAXCOUNT ) {
        console.log ("2 has reached maximum count.");
    }
    else if( count3 == MAXCOUNT ) {
        console.log ("3 has reached maximum count.");
    }
    else if( count4 == MAXCOUNT ) {
        console.log ("4 has reached maximum count.");
    }
    else if( count5 == MAXCOUNT ) {
        console.log ("5 has reached maximum count.");
    }
    else if( count6 == MAXCOUNT ) {
        console.log ("6 has reached maximum count.");
    }
    
    if ( (count1 < count2) && (count1 < count3) && (count1 < count4) && (count1 < count5) && (count1 < count6) ) {
        console.log ("1 has reached minimum count.");
    }
    else if( (count2 < count1) && (count2 < count3) && (count2 < count4) && (count2 < count5) && (count2 < count6) ) {
        console.log ("2 has reached minimum count.");
    }
    else if( (count3 < count1) && (count3 < count2) && (count3 < count4) && (count3 < count5) && (count3 < count6) ) {
        console.log ("3 has reached minimum count.");
    }
    else if( (count4 < count1) && (count4 < count2) && (count4 < count3) && (count4 < count5) && (count4 < count6) ) {
        console.log ("4 has reached minimum count.");
    }
    else if( (count5 < count1) && (count5 < count2) && (count5 < count3) && (count5 < count4) && (count5 < count6) ) {
        console.log ("5 has reached minimum count.");
    }
    else if( (count6 < count1) && (count6 < count3) && (count6 < count4) && (count6 < count5) && (count6 < count2) ) {
        console.log ("6 has reached minimum count.");
    }