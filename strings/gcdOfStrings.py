def gcdOfString(str1, str2):
  # Lengths of both strs
  n = len(str1)
  m = len(str2)
  def isDivisble(div):
    if n % len(div) == 0:
        return str1 == div * (n // len(dd))
  # Helper function divide the string lengths
  res = cur
  cur = ''
  for i in range(m):
    cur += str2[i]
    # Multiply curring string by the current divisor (str2length/i+1)
    if cur * (m // i+1) == str2 and div(cur):
      res = cur