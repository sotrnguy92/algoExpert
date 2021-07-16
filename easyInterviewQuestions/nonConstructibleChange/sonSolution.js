function nonConstructibleChange(coins) {

    if (coins.length === 0){
        return 1;
    }

    let maxCoins = 1;
    coins.sort( (a, b) => a-b);

    for (let i=0; i<coins.length; i++) {
        if (coins[i]>maxCoins){
            return maxCoins
        } else{
            maxCoins += coins[i]
        }
    }
    return maxCoins;

}

const purse = [1,2]

nonConstructibleChange(purse);