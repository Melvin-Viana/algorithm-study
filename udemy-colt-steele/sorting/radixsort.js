const getDigit = (number, digit) => {
  return Math.floor(Math.abs(number)/Math.pow(10,digit)) %10 
}

const getDigitCount = (number) => {
  if(number === 0) return 1;
  number = Math.abs(number)
  return Math.floor(Math.log10(number)) + 1;
}

const mostDigits = (arr) => {
  return Math.max(...arr.map(getDigitCount))
}
console.log(getDigit(32,4))

const radixSort = (numbers) => {
  const end = mostDigits(numbers);
  
  for (let i = 0; i < end; i++) {
    const buckets = Array.from({length:10},()=>[]);
    for (let num of numbers) {
      let digit = getDigit(num,i);
      buckets[digit].push(num);
    }
    numbers = [].concat(...buckets)
  }
  return numbers;
}

console.log(radixSort([123234,120,123,3454,123423455,1222,321,4,1,0,9]))

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length-1;
  while (left <= right) {
    let mid = Math.floor((right-left)/2)+left;
    if(arr[mid] === target) return mid;
    else if(arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log(binarySearch([1,3,5,7,8], 5))
console.log(binarySearch([1,3,5,7,8], 3))
console.log(binarySearch([1,3,5,7,8], 7))
console.log(binarySearch([1,3,5,7,8], 8))
console.log(binarySearch([1,3,5,7,8], 1))