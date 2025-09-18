//            1> Peak Element in Array

// Given an array arr[] where no two adjacent elements are same, find the index of a peak element. An element is considered to be a peak element if it is strictly greater than its adjacent elements. If there are multiple peak elements, return the index of any one of them.

// Note: Consider the element before the first element and the element after the last element to be negative infinity.

// Examples:

// Input: arr[] = [1, 2, 4, 5, 7, 8, 3]
// Output: true
// Explanation: arr[5] = 8 is a peak element because arr[4] < arr[5] > arr[6].

// Input: arr[] = [10, 20, 15, 2, 23, 90, 80]
// Output: true
// Explanation: arr[1] = 20 and arr[5] = 90 are peak elements because arr[0] < arr[1] > arr[2] and arr[4] < arr[5] > arr[6].

// Input: arr[] = [1, 2, 3]
// Output: true
// Explanation: arr[2] is a peak element because arr[1] < arr[2] and arr[2] is the last element, so it has negative infinity to its right.

// Constraints:
// 1 ≤ arr.size() ≤ 106
// -231 ≤ arr[i] ≤ 231 - 1

// Expected Complexities
// Time Complexity: O(log n)
// Auxiliary Space: O(1)

function peakElement(arr){
    let n=arr.length;

    //if there is only one element, then it,s a peak
    if(n==1)
        return 0;

    //if the first element is peak
    if(arr[0]>arr[1])
        return 0;

    //if the last element is peak
    if(arr[n-1]>arr[n-2])
        return n-1;

    //search space for binary search
    let low=1, high=n-2;

    while(low<=high){
        let mid=low + Math.floor((high-low)/2);

        //if the element at mid is a peak element return mid

        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1])
        
            return mid;
        
        //if next neighbor is greater, then peak element will exist in the left subarray
        if(arr[mid]< arr[mid+1]){
            low=mid+1;
        }
        else
        {
           high=mid - 1;
        }
           
        
    }
    return 0;
}

const arr = [1,2,4,5,7,8,3];
console.log(peakElement(arr));  //output-- 5
//console.log(peakElement(arr)?"true":"false");  output -- true

       
     