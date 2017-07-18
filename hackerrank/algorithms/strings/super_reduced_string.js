/*
 * source: https://www.hackerrank.com/challenges/reduced-string
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

function super_reduced_string(s){
    let reduced = [], i = 0, j = -1;
    while (i < s.length) {
        if (s[i] == s[i+1]) {
            // skip
            i += 2;
        } else {
            if (reduced[j] != s[i]) {
                reduced.push(s[i]);
                j += 1;
            } else {
                // remove the previous dup
                reduced.splice(j, 1);
                j -= 1;
            }
            i += 1;
        }
    }
    if (reduced.length > 0) {
        return reduced.join('');
    }
    return 'Empty String';
}

function main() {
    var s = readLine();
    var result = super_reduced_string(s);
    process.stdout.write("" + result + "\n");

}
