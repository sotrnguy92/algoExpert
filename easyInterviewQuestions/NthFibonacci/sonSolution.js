function getNthFib(n) {
    let fib = [0,1]
if (n<=2){
    return 1
}
    for (let i= 2; i<n; i++){
        fib.push(fib[i-2]+fib[i-1])
    }
    console.log(fib)
    return fib[n-1];
}

console.log(getNthFib(6))
