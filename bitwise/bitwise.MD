# Bitwise Operators
- Base 10 Number system is not used in computers.
- Numbers are created using 0 and or 1, base 2

## Operators in JS
```javascript
  &  //and
  |  //or
  ~  //not
 <<  //zero fill left shift
 >>  //signed fill right shift
>>>  //zero fill right shift
```
### Bitwise AND
- If both bits are 1 then 1 is returned
- Otherwise return 0

```javascript
const valOne = 8
// 1000
//
const valTwo = 9;
// 1001

// 1000
// 1001
  // 1 => step1
  // 10 => step 2
  // 100 => step 3
  // 1000 => step 4
console.log(valOne & valTwo) //8
```

### Bitwise OR
- If both bits are 0 then 0 is returned
- Otherwise 1 is returned

```javascript
valOne = 8;
valTwo = 9;

// 1000
// 1001
    //1
    //10
    //100
    //1001
console.log(valOne)// 9
```

### Bitwise XOR
- If one of the bits is 1 then 1 is returned
- Otherwise 0 is returned
```javascript
valOne = 8;
valOne = 9;

//1000
//1001
  //0
  //00
  //000
  //0001

console.log(valOne ^ valTwo)// 1
```

### Bitwise NOT
*Used on one number only*
- If bit is 0 it becomes 1
- If it is 1 it becomes 0
- otherwise

```javascript

const a = 5;     // 00000000000000000000000000000101
const b = -3;    // 11111111111111111111111111111101

console.log(~a); // 11111111111111111111111111111010
// Expected output: -6

console.log(~b); // 00000000000000000000000000000010
// Expected output: 2

// ALl the zeroes before become 1

```

### Bitwise ZERO FILL RIGHT SHIFT
- Left shift
- Shift all the bits to the left
- Replaces original bit number locations with zero

```javascript

valOne = 8;
// 1000
 console.log(valOne << 3) //64
// moves 1000 to the left and adds 000

```
### Bitwise ZERO FILL RIGHT SHIFT
- Unsigned right shift
- Shift all the bits to the right and fills all the bits in their original places are replaced by zero

```javascript

valOne = 8;
console.log(valOne >>> 3); //1
// 1000 => 0001
```

### Bitwise SIGNED RIGHT SHIFT
- Shifts all the bits to the right but preserves the sign

```javascript
const negativeNum = -9;

console.log(negativeNum >> 3); // -2

```

### Bitwise UNSIGNED RIGHT SHIFT

```javascript
const num = -9;
console.log(num >>> 3); //536870910
```