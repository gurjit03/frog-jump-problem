function solution(X, Y, D) {
    var n = (Y - X + D)/D;
    if(Math.floor(n) == n) {
        return --n;   
    }else {
        return Math.floor(n);   
    }
}
