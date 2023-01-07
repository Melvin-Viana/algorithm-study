# Quick Sort
Select an arbitray element(pivot), and swap the list into two sides. Larger elements to the right. Smaller to the left of pivot.
Pivot helper function is in-place.

## Pseudocode
- Pivot helper function:
  * Select your pivot element *start*(parameter) (default = 0)
  * Keep track of pivot index
  * Loop through array from element after *start*(default=0) until the *end*(default=arr.length-1)
    * If pivot is greater than current element in loop
      1. Increment pivot index
      2. Swap current element with the element in the pivot index
  * End Loop (parameter) (default = arr.length-1)
  * Swap pivot index with the pivot element
  * Return your pivot index
- Call the pivot helper on the array
- Helper calculates the sorted subarray lengths.
  * Check if the right start point is less than left end; end recursive call if so
- Quick Sort:
  * Base Case - check if *start* is more than or equal to *end*, do nothing
  * Otherwise:
    * Call pivot helper on the array
    * Recursively call quicksort on the subarray left of the pivot
    * Recursively call quicksort on the subarray right of the pivot
  * Return arr

## TC
O(n log n) - Average
O(n^2) - Worst Case, going through the minimum/maximum every time

## SC
Constant space