// https://www.hackerrank.com/contests/w34/challenges/once-in-a-tram

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

function onceInATram(x) {
    function sum(s) {
        let sum_ = 0;
        [...s].forEach(i => {
            sum_ += parseInt(i);
        });
        return sum_;
    }
    
    let xS = x.toString(),
        a = xS.substr(0, 3),
        b = xS.substr(3, 3),
        aSum = sum(a),
        bSum = sum(b) + 1;
    
    b = parseInt(b);
    while (aSum != bSum) {
       b += 1;
       bSum = sum(b.toString());
    }
    return a + b.toString();
}

function main() {
    var x = parseInt(readLine());
    var result = onceInATram(x);
    process.stdout.write("" + result + "\n");

}
