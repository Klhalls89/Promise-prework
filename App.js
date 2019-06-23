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
  console.log('after sort', words)
}

function makeAllCaps(words) {
  checkedWords = words.map(word => {
    if (typeof word === 'string') {
      return true;
    } else {
      return false;
    }
  });

  let promise = new Promise(function(resolve, reject) {
    if (checkedWords.includes(false)) {
      reject('Failure!');
    } else {
      resolve('Success!');
    }
  });

  words = words.map(word => {
    return word.toUpperCase()
  })

  promise
    .then(data => sortWords(words))
    .catch(error => console.log(error))

  promise
    .then(result => console.log(result))
    .catch(error => console.log(error))

}

makeAllCaps(['wowow', 'dog', 'bird']);


