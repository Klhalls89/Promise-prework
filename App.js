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

  let promise = new Promise(function(resolve, reject) {

    words = words.map(word => {
      if(typeof(word) === 'string') {
        resolve('Success!');
        return word.toUpperCase();
      } else {
      reject('Failure!');
      console.log('No, the array you passed in contained an element that was not a string!')
      }
    })
  });

  promise.then(data => sortWords(words))
  promise.then(result => console.log(result))
  .catch(error => console.log(error))

}

makeAllCaps(['wowow', 'pants', 'bird'])


