function validateBst(tree) {
    let leftTree = true;
    let rightTree = true;
    let value = tree.value

    if(tree.left && !checkTreeLeft(tree.left, value)){
        return false;
    }else if (tree.right && !checkTreeRight(tree.right, value)){
        return false;
    }else if(!tree.left && !tree.right){
        return true;
    }else if ((tree.left && tree.left.value > tree.value) || (tree.right && tree.right.value < tree.value)){
        return false;
    }
    if(tree.left && tree.left.value < tree.value){
        leftTree = validateBst(tree.left);
    }
    if (tree.right && tree.right.value >= tree.value){
        rightTree = validateBst(tree.right);
    }

    if(!leftTree || !rightTree){
        return false;
    }else{
        return true;
    }
}

function checkTreeLeft(tree, value){
    if (tree.value >= value){
        return false
    }else if (tree.left && tree.right) {
        return !!(checkTreeLeft(tree.left, value) && checkTreeLeft(tree.right, value));
    }else if (tree.left){
        return checkTreeLeft(tree.left, value);
    }else if (tree.right){
        return checkTreeLeft(tree.right, value);
    }else{
        return true;
    }
}

function checkTreeRight(tree, value){
    if (tree.value < value){
        return false
    }else if (tree.left && tree.right) {
        return !!(checkTreeRight(tree.left, value) && checkTreeRight(tree.right, value));
    }else if (tree.left){
        return checkTreeRight(tree.left, value);
    }else if (tree.right){
        return checkTreeRight(tree.right, value);
    }else{
        return true;
    }
}