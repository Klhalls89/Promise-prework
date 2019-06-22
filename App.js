function testNum(num) {
  let p = new Promise(function(resolve, reject) {
    if(num > 10) {
      resolve('Success!');
    } else {
      reject('Failure!');
    }
  });
  p.then(function(result) { 
    console.log(result)
  }).catch(function() {
    console.log('error')
  }).finally(function() {
    console.log('ran function')
  });
}

testNum(12)