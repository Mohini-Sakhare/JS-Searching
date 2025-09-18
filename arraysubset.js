  //   2> Array Subset

// Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].

// Examples:

// Input: a[] = [11, 7, 1, 13, 21, 3, 7, 3], b[] = [11, 3, 7, 1, 7]
// Output: true
// Explanation: b[] is a subset of a[]
// Input: a[] = [1, 2, 3, 4, 4, 5, 6], b[] = [1, 2, 4]
// Output: true
// Explanation: b[] is a subset of a[]
// Input: a[] = [10, 5, 2, 23, 19], b[] = [19, 5, 3]
// Output: false
// Explanation: b[] is not a subset of a[]
// Constraints:
// 1 <= a.size(), b.size() <= 105
// 1 <= a[i], b[j] <= 106

// Expected Complexities
// Time Complexity: O(n + m)
// Auxiliary Space: O(n)

// We can use a hash set to store elements of a[],
//  this will help us in constant time complexity searching.
//  We first insert all elements of a[] into a hash set.
//  Then, for each element in b[], we check if it exists in the hash set.

function isSubset(a,b){
    //create a hash set and insert all elements of a 
    const hashSet=new Set(a);

    //check each element of b in the hash set
    for(const num of b){
        if(!hashSet.has(num)){
            return false;
        }
    }
    
    //if all elements pf b are found in the hash set
    return true;
}

const a=[11,1,13,21,3,7];
const b=[11,3,7,1];

console.log(isSubset(a,b)?"true":"false");
