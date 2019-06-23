function testNum(num) {
  let promise = new Promise(function(resolve, reject) {
    if(num > 10) {
      resolve('Success!');
    } else {
      reject('Failure!');
    }
  });
  promise.then(result => console.log(result))
  .catch(error => console.log(error))
}

testNum(12)

function sortWords(words) {
  words = words.sort()

  return new Promise((resolve, reject) => {
    resolve(words);
  })
}

function makeAllCaps(words) {
  words = words.map(word => {
    if (typeof word === 'string') {
      return word.toUpperCase();
    } else {
      return false;
    }
  });

  return new Promise((resolve, reject) => {
    if (words.includes(false)) {
      reject('No, the array you passed in contained an element that was not a string!');
    } else {
      resolve(words);
    }
  });
}

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))


