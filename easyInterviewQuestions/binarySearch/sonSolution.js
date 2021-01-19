function findClosestValueInBst(tree, target, closest=tree.value) {
    const currentDiff = tree.value - target;

    let closestNum = closest

    if(Math.abs(currentDiff) < Math.abs(target-closest)){
        closestNum = tree.value
    }

    if (tree.left !== null && currentDiff > 0){
        return findClosestValueInBst(tree.left, target, closestNum)
    }else if (tree.right !== null && currentDiff < 0){
        return findClosestValueInBst(tree.right, target, closestNum)
    }else{
        return closestNum
    }
}
