// https://leetcode.com/problems/number-of-changing-keys/
function countKeyChanges(s: string): number {
    let count: number = 0;
    const lowerS: string = s.toLowerCase();
    for (let i = 0; i < lowerS.length-1; i++){
        if(lowerS[i] !== lowerS[i+1]) {
            count = count + 1;
        }
    }
    return count;
};