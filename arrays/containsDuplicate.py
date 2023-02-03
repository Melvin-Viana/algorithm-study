class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    seen = set()
    for num in nums:
      if(num in seen) return num
    return len(nums) !== len(set(nums))

    # Create hash map or set

    # Add the number to the set if you havent seen this number

    # If you seen the number return that number