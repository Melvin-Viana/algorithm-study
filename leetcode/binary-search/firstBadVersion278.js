/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */


/**
 *
 * https://leetcode.com/problems/first-bad-version
 * @param {function} isBadVersion()
 * @return {function}


  Explanation:
    You want to split the versions into sections of two.
    When the left section has the first bad version:
      - Left to Middle
          check the left section only and split that into two sections.
    Otherwise check right section.

    Once the section turns into only one number in the section, return that number.


*/
const firstBadVersion = (isBadVersion) => {

  return function(n) {
    let left = 1;
    let right = n
  while (left < right) {
    let middle = Math.floor((left + right) / 2);

    // Check if in left section
    if(isBadVersion(middle)) right = middle;
    // Otherwise its in the right section
    else left = middle + 1;
  }
    return right;
  }
}
