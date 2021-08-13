function nodeDepths(root, depth=0) {
    let totalSum = 0;
    if (root.left){
        totalSum += nodeDepths(root.left, depth +1);
    }
    if (root.right){
        totalSum += nodeDepth(root.right, depth + 1);
    }
    totalSum += depth;
    return totalSum;
}