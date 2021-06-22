
function classPhotos(redShirtHeights, blueShirtHeights) {
    let sortedBlue = blueShirtHeights.sort((a, b)=>a-b)
    let sortedRed = redShirtHeights.sort((a,b)=>a-b);
    let blueShorter = 0
    let redShorter = 0;
    for (let i = 0; i < sortedBlue.length; i++) {
        if (sortedBlue[i] < sortedRed[i]){
            blueShorter ++;
        }else if (sortedBlue[i] > sortedRed[i]){
            redShorter ++;
        }else{
            return false;
        }
    }
    if (redShorter !== 0 && blueShorter !== 0){
        return false;
    }else {
        return true;
    }
}

let blueShirtHeights = [6, 9, 2, 4, 5]
let redShirtHeights = [5, 8, 1, 3, 4]

console.log(classPhotos(redShirtHeights, blueShirtHeights))

