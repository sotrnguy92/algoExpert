class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let currentNode = this;
        while (currentNode){
            if(value >= currentNode.value){
                if(currentNode.right){
                    currentNode = currentNode.right;
                }else{
                    currentNode.right = new BST(value);
                    break;
                }
            }else{
                if(currentNode.left){
                    currentNode = currentNode.left;
                }else{
                    currentNode.left = new BST(value);
                    break
                }
            }
        }
        return this;
    }

    contains(value) {
        let currentNode = this
        while(currentNode){
            if(currentNode.value === value){
                return true
            }else if (value > currentNode.value){
                currentNode = currentNode.right
            }else{
                currentNode = currentNode.left
            }
        }
        return false
    }

    remove(value, parent = null) {
        if (value < this.value){
            if(this.left !== null)
                this.left.remove(value, this);
        }else if (value > this.value){
            if(this.right){
                this.right.remove(value, this);
            }
        }else{
            if(this.left && this.right){
                //find the max in the right branch
                this.value = this.right.getMin();
                this.right.remove(this.value, this)
            }else if (!parent){
                if(this.left){
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                }else if (this.right){
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                }
            }
            else if (parent.left === this){
                if (this.left){
                    parent.left = this.left
                }else {
                    parent.left = this.right
                }
            }else if (parent.right === this){
                if (this.right){
                    parent.right = this.right;
                }else {
                    parent.right = this.left
                }
            }
        }
        return this;
    }

    getMin(){
        if (!this.left){
            return this.value;
        }else {
            return this.left.getMin();
        }
    }

}