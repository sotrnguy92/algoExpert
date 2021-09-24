function minHeightBst(array) {
    return constructMinHeightBst(array, null, 0, array.length-1);
}

function constructMinHeightBst(array, start, end) {
    if (end < start){
        return null;
    }
    let center = Math.floor((start+end)/2)
    let insertValue = array[center]
    let tree = new BST(insertValue)


    tree.left = constructMinHeightBst(array, start, center-1);
    tree.right = constructMinHeightBst(array, center+1, end)
    return tree
}


class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
