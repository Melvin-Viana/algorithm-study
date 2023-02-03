
var merge = function(nums1, m, nums2, n) {
    let currIndex = m + n - 1;
    m--; n--;
    while (n >= 0) {
      //Insert largest number
      if(nums1[m] > nums2[n]) {
        nums1[currIndex] = nums1[m--]
      } else {
        nums1[currIndex] = nums2[n--]
      }
      currIndex--;
    }

};
