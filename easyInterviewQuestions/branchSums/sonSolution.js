function branchSums(root, currentValue = 0,sumArray = [])  {

    let newValue = currentValue + root.value;

    if (!root.left && !root.right) {
        sumArray.push(newValue);
        return sumArray;
    }

    if (root.left){
        branchSums(root.left, newValue,sumArray);
    }
    if (root.right){
        branchSums(root.right, newValue, sumArray);
    }

    return sumArray;

}

branchSums()
