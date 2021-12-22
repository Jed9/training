// https://projecteuler.net/problem=1

/*
Multiples of 3 or 5
Show HTML problem content 
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

export class Euler001 {
    run = () => {
        let sum = 0;
        let num = 1;
        while (num < 1000) {
            // console.log(num)
            

            if ((num / 3) % 1 === 0 ) {
                console.log(`${num} divisivble by 3!`)
                sum = sum + num;
            }

            if ((num / 5) % 1 === 0 ) {
                console.log(`${num} divisivble by 5!`);
                sum = sum + num;
            }
            num = num + 1;
            
        }

        console.log(`Sum total is ${sum}`)
    }
}