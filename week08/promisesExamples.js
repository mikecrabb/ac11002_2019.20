
// EXAMPLES TAKEN FROM https://medium.com/@kevinyckim33/what-are-promises-in-javascript-f1a5fc5b34bf

//SIMPLE EXAMPLE OF A PROMISE TO CLEAN THE ROOM WITH THIS BEIGN RESOLVED
let promiseToCleanTheRoom = new Promise(function(resolve, reject){

  let isClean = true;
  if(isClean){
    resolve('Clean');
  } else {
    reject('not Clean');
  }

});

//EXECUTION OF THE PROMISE
promiseToCleanTheRoom.then(function(result){
  console.log('the room is ' + result)
}).catch(function(result) {
  console.log('the room is ' + result);
});

//NESTING OF PROMISES

let cleanRoom = function(){
  return new Promise(function(resolve, reject) {
    resolve('I cleaned the room');
  });
}

let removeRubbish = function(){
  return new Promise(function(resolve, reject) {
    resolve(message + "' " + 'I threw out the rubbish');
  });
}

let winIcecream = function(){
  return new Promise(function(resolve, reject) {
    resolve(message + "' " + 'so I got some ice cream');
  });
}

cleanRoom().then(function(result){
  return removeGarbage(result);
}).then(function(result){
  return winIcecream(result);
}).then(function(result){
  console.log(result + " " " so now I can sleep");
});
