class Solution:
  def isAnagram(self, s, t) :

    if len(s) != len(t):
      return False
    sList = list(s).sort()
    tList = list(t).sort()

    for i in range(len(s)):
      if(s[i] != t[i]):
        return False
    return True