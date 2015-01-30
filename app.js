var parse = require("bibtex-parser");
var minimist = require("minimist");
var _ = require("underscore");
var fs = require('fs');
var path = require('path');


var argv = minimist(process.argv.slice(2), {
    string: ['j'],
    boolean: ['q'],
    'default': {
        'q': false
    }
});

if (_.isUndefined(argv.j)) {
    throw 'Must specify input file with -j';
}

function log(str) {
    if (!argv.q) {
        console.log(str);
    }
}

fs.readFile(argv.j, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    var bibtexObj = parse(data);
    var outPath = path.normalize(argv._[0]);

    var output = {
        "journals": bibtexObj
    };

    log("Writing to: " + outPath);
    log(JSON.stringify(output, null, '  '));

    fs.mkdir(path.dirname(outPath), function (err) {
        if (err) {
            console.log(err);
        }

        fs.writeFile(outPath, JSON.stringify(output), function (err) {
            if (err) {
                throw err;
            }

            console.log("Completed writing file: " + outPath);
        })
    })

});