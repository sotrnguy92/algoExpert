function inOrderTraverse(tree, array) {
    if(tree.left){
        array.concat(inOrderTraverse(tree.left, array));
    }
    array.push(tree.value);
    if(tree.right){
        array.concat(inOrderTraverse(tree.right, array));
    }
    return array;
}

function preOrderTraverse(tree, array) {
    array.push(tree.value);
    if(tree.left){
        array.concat(preOrderTraverse(tree.left, array))
    }
    if(tree.right){
        array.concat(preOrderTraverse(tree.right, array));
    }
    return array
}

function postOrderTraverse(tree, array) {
    if(tree.left){
        array.concat(postOrderTraverse(tree.left, array));
    }
    if(tree.right){
        array.concat(postOrderTraverse(tree.right, array));
    }
    array.push(tree.value);

    return array;
}