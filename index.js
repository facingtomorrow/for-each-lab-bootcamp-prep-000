function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(fn) {
  var array = [0,1,2,3];
  array.forEach(element => fn(element));
  return array;
}

function doToArray(array, fn){
  array.forEach(element => fn(element));
}