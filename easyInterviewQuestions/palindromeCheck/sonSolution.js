function isPalindrome(string, i=0) {
    if(string[i] !== string[string.length-1-i]){
        return false;
    }else if (i === Math.floor((string.length-1)/2)){
        return true;
    }else{
        return isPalindrome(string, i=i+1);
    }
}

isPalindrome("hello");

// Do not edit the line below.
