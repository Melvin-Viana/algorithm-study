# Priority Queue
- An abstract data type that operates similar to a normal queue
- Each elment has priority
- Only supports comparable data
- Data must be ordered from least to greatest or vice versa

## Heap
- Tree based DS that satisifies **heap invariant**
- *Heap Invariant*: A is a parent node of B, A is ordered with respect to B for all nodes A, B in the heap
- Value of the parent node is greater than or equal to child
- Value of the parent node is less than or equal to child
- Heap

## When and Where PS used
- Dijkstra's Shortest Path Algo
- Next best or next worst element
- Huffman coding (lossless data compression)
- Best First Search: selecting most promising node continously
- Used my Minimum Spanning Tree Algorithms

## Complexity PQ w/ Binary Heap
- Binary Heap construction: Heap Sort O(N)
- Polling: Removing an element from the root of the heap O(logN)
- Peeking:  O(1)
- Adding: Possibly restructuring heap O(logN)
- Naive Removing: Linear scan and remove it; very slow O(N)
- Advanced removing with help from hash table: O(logN)
- Naive contains: Scan through all elements O(n)
- Contains w/ hash table: Linear space O(1)

## Turning Min PQ into Max PQ
- Negating the Min PQ, meaning create inverse of the min pq
- For numbers you  negate the numbers (i.e. inserting 5 would mean inserting -5)


1:50 Timer