const compareNumToTen = num => {
    return new Promise((resolve, reject) => {
      if (num > 10) {
        resolve(num + ' is greater than 10');
      } else {
        reject(num + ' is less than 10');
      }
    });
  };
  
  compareNumToTen(9)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
    compareNumToTen(11)
    .then(result => console.log(result))
    .catch(error => console.log(error));




    //
    // works only inside async functions
    function resolveAfter2Seconds() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 2000);
        });
      }
      
      async function asyncCall() {
        console.log(6);
        const result = await resolveAfter2Seconds();
        console.log(result);
        // expected output: 'resolved'
      }
      
      asyncCall();
      