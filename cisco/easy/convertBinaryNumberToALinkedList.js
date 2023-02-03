const getDecimalValue = (head) => {
  let str = '';
  while (head) [head,str] = [head.next, str +head.val];
  return parseInt(str, 2);
}