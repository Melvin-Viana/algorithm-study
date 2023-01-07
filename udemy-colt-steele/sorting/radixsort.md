## Radix Sort
- Direct comparisons are not made. Works on lists of numbers. Used with binary numbers.
- Create buckets with number of digits
- 3 Helper functions: getDigit(number, digit), getDigitCount(number), getMostDigitCount(array)

## Pseudocode
* Takes in a list of numbers
* Find the largest number of digits in that list
* Loop from k = 0 to the largest digit
  * Create buckets for each digit (0-9)
  * Place each number in the corresponding digit based on its kth digit

## TC
Best - O(nk) n(number of integers) k(number of digits)
Average - O(nk)
Worst - O(nk)

Theoretically is faster than comparison sorts.
## SC