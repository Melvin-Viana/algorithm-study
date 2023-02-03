# Variables
n = 0
print(n)

n = 'abc'
print(n)

#multiple assignments
n, m = 0, 'abc'

print(n,m)

# Increment

n+=1
# n++ No good

#None => null

n = 0

if n > 2:
  n-=1
elif n==2:
  n *= 2
else:
  n+=2

# Multi-line conditions need parentheses
if ((n > 2 and
    n != m) or n==m):
      n+=1

# While loops
n = 0
while n < 5:
  print(n)
  n += 4

for i in range(5):
  print(i)

# 2 to 5
for i in range(2, 6):
  print(i)

# Looping from i = 5, to i = 2, decrement loop
for i in range(5, 1, -1):
  print(i)

# Division - Decimal division by defaut
print(5/2)

#Rounds to zero by default
print(5//2)
print(3//2)
#Rounds negative down and not towards zero, its away from zero
print(-3//2) # -2
print(int(-3//2))


"""
  modulo
"""

print(10%3)
#not consistent with other languages
print(-10%3)


import math
#Python numbers are infinit so they never overflow

float('inf') # Infinity
float('-inf')# Negative inifinity
print(math.pow(2, 200) < float("inf"))


"""
Arrays
"""

arr = [1,2,3]
print(arr)

# Can be used as a stack
arr.append(4)
arr.append(5)
print(arr)
arr.pop()

arr.insert(1, 7) # Insert to index 1 - O(n) operation

# Enumerate gives index and value
nums = [4,5,6]
for i, n in enumerate(nums):
  print(i,n)


## 2-D lists


arr = [[0]*4] * 4 # Creates a reference of the first row 3 extra times
arr[0][3] = 3
print(arr)
arr = [[0] * 4 for i in range(4)]


"""
"""
#Ascii value of characters
print(ord('a'))
print(ord('z'))
print(ord('A'))
print(ord('Z'))


"""
Queues
"""

from collections import deque

queue = deque()
queue.append(3) # Add to the right
queue.appendleft(1)# Add to the left

queue.popleft() # Pops the element from the right in constant time

queue.pop() # Pop from the right side


"""
Hash Sets
"""

mySet = set()
mySet.add(1)

if(1 in mySet):
  print('Yes')

#Intialize with a list

print(set([1,2,3]))

mySet = { i for i in range(5)}

print(mySet)
"""
Hashmap
"""
myMap = {}
myMap['alice'] = 99
myMap['bob'] = 77

# in key check
print("alice" in myMap)
#Remove from map
myMap.pop('alice')

#dict comprehension

myMap = { i : 2*i for i in range(3) } # mapping a calculated value onto index

"""
Tuples
"""
# imutable - can be indexed but not modified
tup = (1,2,3)


# main use case is using it as a key in a map


"""
Heaps
"""

import heapq

minHeap = []
heapq.heappush(minHeap, 3)
heapq.heappush(minHeap, 2)
heapq.heappush(minHeap, 4)

print(minHeap[0])


# Max heap by multiplying the original value by negative 1


# Heapify - build a heap off of an aray

arr = [2,1,8,4,5]

heapq.heapify(arr)
while arr:
  print(heapq.heappop(arr))


"""
Functions
"""

def myFunc(n, m):
  return n * m


# Nested functions
def outer(a, b):
  def inner(a, b):
    return a + b
  return inner()


# Modifying a objects but cant reassign values within inner functions

def double(arr, val):
  def helper():
    for i, n in enumerate(arr):
      arr[i] *= 2
      # Enable modifying outside of its scope
      nonlocal val
      val *=2

"""
Classes
"""

class MyClass:

  def __init__(self, nums):
    self.nums = nums
    self.size = len(nums)

  def getLength(self):
    return self.size