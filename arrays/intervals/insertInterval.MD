# Insert Intervals

## One Pass
1. Iterate through entire array
2. Compare new interval to current interval in the iteration
  - 3 Situations:
      - Current interval is after new interval
        * Push current interval
      - Current interval is before new interval
        * Push new interval
        * Update new interval => current interval
      - Current interval is in between new interval
        * Update start of new interval if needed
        * Update end of new interval if needed
