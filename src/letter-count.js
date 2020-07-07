export const getLetterCount = (string) => {
  let letterCount = {};
  
  const letters = string.split('');
  
  letters.forEach(letter => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++
    }
  });

  return letterCount;
};