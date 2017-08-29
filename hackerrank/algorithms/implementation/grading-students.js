/**
 * Ref: https://www.hackerrank.com/challenges/grading
 */

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

function solve(grades){
    function convert(n) {
        if (n < 38) return n;
        let div = n / 5;
        let split = div.toString().split('.');
        if (split[1]) {
            if (parseInt(split[1]) > 5) {
                return (parseInt(split[0]) + 1) * 5;
            }
        }
        return n;
    }
    return grades.map(convert);
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
    


}
