process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function maximumGcdAndSum(A, B) {
    function gcd(a, b) {
        if (a % b == 0) {
            return b;
        }
        return gcd(b, a % b);
    }
    
    let maxGCD = 0,
        maxSum = 0,
        gcd_,
        sum_;
    for (let i = 0, len=A.length; i < len; i++) {
        for (let j = 0, lenB = B.length; j < lenB; j++) {
            gcd_ = gcd(A[i], B[j]);
            sum_ = A[i] + B[j];
            if ((gcd_ == maxGCD && sum_ > maxSum) || gcd_ > maxGCD) {
                maxGCD = gcd_;
                maxSum = sum_;
            }
        }
    }
    
    return maxSum;
}

function main() {
    var n = parseInt(readLine());
    A = readLine().split(' ');
    A = A.map(Number);
    B = readLine().split(' ');
    B = B.map(Number);
    var res = maximumGcdAndSum(A, B);
    process.stdout.write("" + res + "\n");

}
