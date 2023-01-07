# Binary Search
O(n log n) algorithm using divide and conquer technique to search for a specific
## Pseudocode
- Get two pointers, traditionally they are a left and right pointer.
- Calculate mid => Math.floor((high-low)/2) + low for overlow reasons
- Loop the following logic while: (left <= right)
  - If target value is in mid 
    * return mid
  - If target value is in left (check left)
    * Move right pointer to mid -1
  - If target value is in right (check right)
    * Move left pointer to mid + 1 
- return value indicating the target is not found

## Calculating mid
Java Binary Search uses Math.floor((high-low)/2) + low, because of overflow reasons.
https://ai.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html