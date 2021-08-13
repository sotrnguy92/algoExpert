function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a,b) => a - b);
  let totalSpeed = 0;
  if (fastest){
    blueShirtSpeeds.sort((a,b) => b-a);
  }else{
    blueShirtSpeeds.sort((a,b) => a-b);
  }

  for (let i =0; i < redShirtSpeeds.length; i++){
    totalSpeed += Math.max(blueShirtSpeeds[i], redShirtSpeeds[i])
  }
  return totalSpeed;
}

let redShirtSpeeds = [5, 5, 3, 9, 2]
let blueShirtSpeeds = [3, 6, 7, 2, 1]
let fastest = true

console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest))
