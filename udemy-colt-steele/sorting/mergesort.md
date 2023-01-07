# Merge Sort
**Divide And Conquer**
Divide the array into almost equal subarrays, merge the two sorted lists into one.
A subarray with one or less elements is a sorted array. Placing each subarray into the correct location.
## Pseudocode
- Break arrays into halves that are empty or have one element
- When one array is empty

## TC
O(n log n) - logn decompositions * n comparisons per decomposition
Iterate through entire array creating N 1 length subarrays. Dividing the sort time by n every time a merge is made.

## SC
O(N) - n arrays are made, not done in place