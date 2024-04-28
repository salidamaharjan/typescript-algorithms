// import {test, expect} from 'vitest';
// function longestPalindrome(word: string): string {
//     let fromFirst: string[] = [];
//     let fromLast: string[] = [];
//     let palindrome: string[] = [];
//     let newWord: string[] = word.split("");
//     // console.log(newWord);
//     for( let i: number = 0; i < word.length; i++){
//         for(let j: number = i + 1; j < newWord.length; j++){
//             if(word[i] === newWord[j]){
//                 fromFirst.push(word[i]);
//                 fromLast.unshift(newWord[j]);
//                 newWord.splice(j, 1);
//                 break;
//             } 
//         }
//     }
//     // console.log(newWord);

//     for(let i: number = 0 ; i < fromFirst.length; i++) {
//         for(let j: number = 0; j < newWord.length; j++) {
//             if( fromFirst[i] === newWord[j]){
//                 newWord.splice(j,1);
//             }
//         }
//     }
//     // console.log(fromFirst);
//     // console.log(fromLast);
//     palindrome = fromFirst.concat(newWord[0]).concat(fromLast);
// return (palindrome.join(''));
// };

// // test("returns the longest longestPalindrome", () => {
// //     const word: string = "church";
// //     expect(longestPalindrome(word)).toBe("chuhc");
// // });
// // test("returns the longest longestPalindrome", () => {
// //     const word: string = "ababad";
// //     expect(longestPalindrome(word)).toBe("abdba");
// // });
// // test("returns the longest longestPalindrome", () => {
// //     const word: string = "babad";
// //     expect(longestPalindrome(word)).toBe("badab");
// // });
// test("returns the longest longestPalindrome", () => {
//     const word: string = "cbbd";
//     expect(longestPalindrome(word)).toBe("bcb");
// });

function longestPalindrome(word: string): string {
    let palindrome: string[] = [];
    let newArr: string[] = [];
    let newWord: string[] = word.split("");
    // console.log(newWord);
    if(!newWord[1]){
        newArr.push(newWord[0]);
        return newArr.join('');
    } else {
        for( let i: number = 0; i < newWord.length; i++){
            for(let j: number = i + 1; j < newWord.length; j++){
                if(newWord[i] === newWord[j]) {
                    newArr.push(newWord[j]);
                    break;
                }
            };
        }
    }
    // console.log(newArr);
    palindrome = newArr.concat(newArr[0]) ; 
return (palindrome.join(''));
};
test("returns the longest longestPalindrome", () => {
        const word: string = "babad";
        expect(longestPalindrome(word)).toBe("bab");
    });