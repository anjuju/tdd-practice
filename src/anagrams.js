export const isAnagram = (a, b) => {
  const regex = /\W/g;
  
  let first = a.replace(regex, '').toLowerCase().split('');
  let second = b.replace(regex, '').toLowerCase().split('');

  if (first.length !== second.length) {
    return false;
  }
  
  first.sort();
  second.sort();

  for (let i in first) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
};