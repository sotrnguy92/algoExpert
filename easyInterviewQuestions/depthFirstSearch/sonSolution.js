// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array, currentNode = this) {
        array.push(currentNode.name);
        if(currentNode.children){
            for (let i = 0; i < currentNode.children.length; i++){
                this.depthFirstSearch(array, currentNode.children[i]);
            }
        }
        return array;
    }
}
