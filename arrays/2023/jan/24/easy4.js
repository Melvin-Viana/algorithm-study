const truncateSentence = (s, k) => {

  s=s.split(' ');

  return s.slice(0,k).join(' ');
}