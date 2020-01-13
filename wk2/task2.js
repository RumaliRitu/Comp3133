const makeUpperCase = words => {
    return new Promise((resolve, reject) => {
      if (
        words.every(word => {
          return typeof word === 'string';
        })
      ) {
        resolve(
          sortWords(
            words.map(word => {
              return word.toUpperCase();
            })
          )
        );
      } else {
        reject('Not a string!');
      }
    });
  };
  
  const sortWords = words => {
    return new Promise((resolve, reject) => {
      if (words) {
        resolve(words.sort());
      } else {
        reject('strings only!');
      }
    });
  };
  
  const ArrayofNames = ['Jaxx', 'Tiny', 'Clay'];
  
  makeUpperCase(ArrayofNames)
    .then(sortWords(ArrayofNames))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  const MixedArray = ['archary', 99, true];
  
  makeUpperCase(MixedArray)
    .then(sortWords(MixedArray))
    .then(result => console.log(result))
    .catch(error => console.log(error));
    