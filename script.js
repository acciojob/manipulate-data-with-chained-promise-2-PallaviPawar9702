const output = document.getElementById("output")
function wait(ms){
  return new Promise(function(resolve){
    setTimeout(resolve, ms)
  })
}

function getData(){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve([1, 2, 3, 4])
    }, 3000)
  })
}

getData()
  .then(function(arr){
    const evenNumbers = arr.filter(function(num){
      return num % 2 === 0;
    });

    return wait(1000).then(function(){
      output.innerText = evenNumbers;
      return evenNumbers;
    })
  })
  .then(function(arr){
    const result = arr.map(function(num){
      return num * 2;
    })

    return wait(2000).then(function(){
      output.innerText = result;
    })
  })
