/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 *
 * Find the first larger letter than target.
 *  - Letter values wrap around, so if a larger letter is not found return the first letter
 *
 *
 */

const nextGreatestLetter = (letters, target) => {
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if(letters[left] > target) return letters[left];
    if(letters[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return letters[0];
}