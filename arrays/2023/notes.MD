# Easy Write ups
1. Similar Pairs
  - Pattern: Hash map
  - Intuition: Hash map
  - First Try: Intutition - :white_check_mark: Coding - :no_entry_sign:
  - My Approach: Get the unique characters of each string, compare to other string. Number of unique characters need to match when comparing both strings
  - O(n^2)
  - Optimized Approach:
    * Transform array to include unique characters only and sort the characters alphabetically.
    * Compare all the elemnts and see if they are a good pair
    * Update output variable by + 1
    * return output
1. Path Crossing
  - Pattern: Hash map
  - Intuition: Hash Map
  -  First Try: :white_check_mark: ; Failed with syntax for Map DS
  - My Approach: Push points on the matrix onto DS, if you ever pass the point, return true.
1. Destination City
  - Pattern: Hash Map
  - Intuition: Graph Traversal
  - First Try: :white_check_mark:
  - My Approach: Store points in Set, if current point is in set return true
1. Truncate Sentence
  - P : String
  - I : String methods, slice 0 , k
  - First Try: :white_check_mark:
  - My Approach: Split string into array split by space, slice the array into 0,k and join the string
  - Optimized Approach: Count the number of spaces, when k is zero return slice(0, currPos)
1. Count Operations
  - Count number of operations when subtracting bigger number
1.  Binary Gap
  - Convert to binary string
  - Calculate distances between 1 and 1, get max
1. Count Asterisks
  - Count the asterisks in first string, in pairs of two. Guaranteed to have a pair
1. Max Subsequence K
  - Copy array, sort that copy
  - Store k greatest numbers
  - Iterate through original numbers array
  - If the number is one of the k greatest numbers, store it to the output.
    - Make sure you don't add values more than needed
  Optimization: Stop when found all of K greatest elements
1. Count Elements
  - Get the max
  - Get the min
  - Count elements in between
1. Check Distances
  Hash Map problem
  - Iterate through each char
  - Store the previous index
  - If the distance between them doesnt match the distance array, return false

# New stuff learned
- Bit manipulation.
- Number to binary string, code is as follows:
```javascript
const number = 4;
console.log(nubmer.toString(2));
```