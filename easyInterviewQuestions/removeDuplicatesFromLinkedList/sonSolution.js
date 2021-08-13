// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    if(linkedList.next !== null && linkedList.value === linkedList.next.value ) {
        linkedList.next = linkedList.next.next;
        removeDuplicatesFromLinkedList(linkedList)
    }
    if(linkedList.next){
        removeDuplicatesFromLinkedList(linkedList.next)
    }

    return linkedList;
}